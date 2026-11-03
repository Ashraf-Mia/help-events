import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-[#0E3B43] px-6 py-12 text-center text-white sm:px-12 sm:py-16">
        <div className="absolute -right-16 -top-16 size-56 rounded-full bg-[#2FA37A]/30" />
        <div className="absolute -bottom-12 -left-12 size-40 rounded-full bg-[#FFC94A]/15" />

        <div className="relative">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Never miss a chance to help
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/80 sm:text-base">
            Get new events near you in your inbox, once a week.
          </p>

          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="h-11 border-white/20 bg-white text-gray-900"
            />
            <Button
              type="button"
              className="h-11 bg-[#FFC94A] px-6 font-semibold text-[#0E3B43] hover:bg-[#ffd36d]"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
