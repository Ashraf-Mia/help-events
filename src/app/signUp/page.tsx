"use client";

import { toast } from "@/components/ui/toast";
import { authClient, signIn } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
      confirmPassword: string;
    };

    if (user.password !== user.confirmPassword) {
      toast.add({
        type: "Warning",
        title: "Passwords don't match",
        description: "Password and confirm password must be the same.",
      });
      return;
    }

    if (!user.password || user.password.length < 8) {
      toast.add({
        type: "Warning",
        title: "Password too short",
        description: "Your password must be at least 8 characters long.",
      });
      return;
    }

    const hasUpperCase = /[A-Z]/.test(user.password);
    if (!hasUpperCase) {
      toast.add({
        type: "Warning",
        title: "Weak password",
        description:
          "Your password must include at least one uppercase letter (A-Z).",
      });
      return;
    }

    const hasLowerCase = /[a-z]/.test(user.password);
    if (!hasLowerCase) {
      toast.add({
        type: "Warning",
        title: "Weak password",
        description:
          "Your password must include at least one lowercase letter (a-z).",
      });
      return;
    }

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (error) {
      console.log(error);
      toast.add({
        type: "Warning",
        title: "Sign up failed",
        description:
          "An account with this email already exists. Please use a different email.",
      });
      return;
    }

    if (data) {
      toast.add({
        type: "Success",
        title: "Welcome!",
        description: "Your account has been created successfully.",
      });
      router.push("/");
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn.social({
      provider: "google",
    });
  };
  const handleGithubSignIn = async () => {
    await signIn.social({
      provider: "github",
    });
  };

  return (
    <div
      data-theme="light"
      className="flex min-h-screen flex-col items-center justify-center bg-transparent px-4 py-8 sm:py-12"
    >
      <h2 className="text-center text-2xl font-bold sm:text-3xl">
        Create your account
      </h2>
      <p className="px-2 pb-4 pt-1 text-center text-sm font-medium text-black/50">
        Sign up for free and start joining community events.
      </p>

      <form className="flex w-full max-w-md justify-center" onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 sm:p-6">
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            required
            className="input w-full"
            placeholder="e.g. Ashraf Mia"
          />

          <label className="label">Photo URL</label>
          <input
            name="image"
            type="url"
            className="input w-full"
            placeholder="Paste your profile photo link"
          />

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            required
            className="input w-full"
            placeholder="you@example.com"
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            required
            className="input w-full"
            placeholder="8+ characters, with upper & lowercase"
          />

          <label className="label">Confirm password</label>
          <input
            name="confirmPassword"
            type="password"
            required
            className="input w-full"
            placeholder="Re-enter your password"
          />

          <button
            type="submit"
            className="btn mt-4 w-full bg-[#0E3B43] text-white hover:bg-[#206470]"
          >
            Sign up
          </button>
        </fieldset>
      </form>

      <div className="w-full max-w-md">
        <span className="mt-4 flex justify-center text-sm font-bold">
          Or, sign up with
        </span>
        <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:justify-center sm:gap-4">
          <button
            onClick={handleGoogleSignIn}
            className="btn w-full border-[#e5e5e5] bg-white text-black sm:w-auto"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Continue with Google
          </button>
          <button
            onClick={handleGithubSignIn}
            className="btn w-full border-black bg-black text-white sm:w-auto"
          >
            <svg
              aria-label="GitHub logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              ></path>
            </svg>
            Continue with GitHub
          </button>
        </div>

        <p className="pt-5 text-center text-sm sm:text-base">
          Already have an account?{" "}
          <Link
            href="/signIn"
            className="font-medium text-[#0E3B43] underline-offset-4 hover:underline"
          >
            Sign in
          </Link>
        </p>
        <Link
          href="/"
          className="flex justify-center pt-4 text-sm text-black/50"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
