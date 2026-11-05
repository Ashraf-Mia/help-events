"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/toast";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [saving, setSaving] = useState(false);

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string).trim();
    const image = (formData.get("image") as string).trim();

    if (!name) {
      toast.add({
        type: "Warning",
        title: "Name is required",
        description: "Please enter your name.",
      });
      return;
    }

    setSaving(true);

    const { error } = await authClient.updateUser({
      name,
      image: image || undefined,
    });

    setSaving(false);

    if (error) {
      toast.add({
        type: "Warning",
        title: "Update failed",
        description: error.message || "Something went wrong. Please try again.",
      });
      return;
    }

    toast.add({
      type: "Success",
      title: "Profile updated",
      description: "Your changes have been saved.",
    });
  };

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-gray-500">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-gray-600">Please sign in to view your profile.</p>
        <Link
          href="/signIn"
          className="rounded-full bg-[#0E3B43] px-6 py-2 text-sm font-semibold text-white hover:bg-[#206470]"
        >
          Sign in
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md px-4 py-8 sm:py-12">
      <h2 className="text-center text-2xl font-bold sm:text-3xl">My Profile</h2>
      <p className="px-2 pb-6 pt-1 text-center text-sm font-medium text-black/50">
        Update your name and profile photo.
      </p>

      <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-8">
        <div className="mb-6 flex flex-col items-center">
          <Avatar className="size-24">
            <AvatarImage
              referrerPolicy="no-referrer"
              src={user.image as string}
              alt={user.name}
            />
            <AvatarFallback className="text-3xl">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <p className="mt-3 text-lg font-semibold">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        <form onSubmit={onSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                required
                defaultValue={user.name}
                placeholder="Your name"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="image">Photo URL</FieldLabel>
              <Input
                id="image"
                name="image"
                type="url"
                defaultValue={user.image ?? ""}
                placeholder="Paste your profile photo link"
              />
              <FieldDescription>
                Paste a link to your new photo. Leave it as it is to keep the
                current one.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                value={user.email}
                readOnly
                className="cursor-not-allowed bg-muted text-muted-foreground"
              />
            </Field>

            <Button
              type="submit"
              disabled={saving}
              className="h-10 w-full bg-[#0E3B43] text-white hover:bg-[#206470]"
            >
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
