"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/toast";
import { authClient } from "@/lib/auth-client";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

const eventTypes = [
  "Donation",
  "Cleanup",
  "Plantation",
  "Winter Relief",
  "Food Drive",
  "Health Camp",
  "Education",
];

const selectClass =
  "h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50";

const CreateEventPage = () => {
  const { data: session } = authClient.useSession();

  const today = new Date().toLocaleDateString("en-CA");

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = formData.get("title")?.toString() ?? "";
    const event = {
      ...Object.fromEntries(formData.entries()),
      creatorName: session?.user.name,
      creatorImage: session?.user.image,
    };

    const token = await getTokenFromClient();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(event),
    });

    const result = await res.json();

    if (res.ok) {
      form.reset();
      toast.add({
        type: "success",
        title: "Event package created",
        description: `${title} has been added successfully.`,
      });
    }

    console.log(result);
  };

  return (
    <div className="mx-auto w-full max-w-xl px-4 py-8 sm:py-12">
      <h2 className="text-center text-2xl font-bold sm:text-3xl">
        Create a Community Event
      </h2>
      <p className="px-2 pb-6 pt-1 text-center text-sm font-medium text-muted-foreground">
        Fill in the details below to organize a social service event in your
        community.
      </p>

      <form
        onSubmit={onSubmit}
        className="rounded-2xl border bg-card p-5 shadow-sm sm:p-8"
      >
        <FieldGroup>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="title">Event Title</FieldLabel>
              <Input
                id="title"
                name="title"
                placeholder="e.g. Winter Clothes Distribution"
                required
              />
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="type">Event Type</FieldLabel>
                <select
                  id="type"
                  name="type"
                  required
                  defaultValue=""
                  className={selectClass}
                >
                  <option value="" disabled>
                    Select a type
                  </option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>

              <Field>
                <FieldLabel htmlFor="date">Event Date</FieldLabel>
                <Input id="date" name="date" type="date" min={today} required />
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="location">Location</FieldLabel>
              <Input
                id="location"
                name="location"
                placeholder="e.g. Mirpur 10, Dhaka"
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="thumbnail">Thumbnail Image URL</FieldLabel>
              <Input
                id="thumbnail"
                name="thumbnail"
                type="url"
                placeholder="https://example.com/image.jpg"
                required
              />
              <FieldDescription>
                Paste a link to an image that represents your event.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="description">Event Description</FieldLabel>
              <Textarea
                id="description"
                name="description"
                placeholder="Tell people what this event is about, what to bring and who it helps."
                className="min-h-28 resize-none"
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Your Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                value={session?.user?.email ?? ""}
                readOnly
                className="cursor-not-allowed bg-muted text-muted-foreground"
              />
              <FieldDescription>
                Filled in automatically from your account.
              </FieldDescription>
            </Field>
          </FieldGroup>

          <Button
            type="submit"
            className="h-10 w-full bg-[#0E3B43] text-white hover:bg-[#206470]"
          >
            Create Event
          </Button>
        </FieldGroup>
      </form>
    </div>
  );
};

export default CreateEventPage;
