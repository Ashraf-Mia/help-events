import { Mail01Icon, SentIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="scroll-mt-24 pb-20 sm:pb-24 lg:pb-28">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-12 text-primary-foreground sm:px-10 lg:px-16 lg:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-brand-lime/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-16 size-80 rounded-full border border-white/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-brand-lime uppercase">
                <HugeiconsIcon icon={Mail01Icon} strokeWidth={1.8} />
                The good news letter
              </span>
              <h2 className="mt-5 font-heading text-3xl font-semibold tracking-[-0.05em] text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
                One good email.
                <br />
                <span className="text-brand-lime">Every other week.</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-primary-foreground/70 sm:text-base">
                Local events worth showing up for, stories from the people who
                did, and small ways to make your corner of the city a little
                brighter.
              </p>
            </div>

            <div>
              <form className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@neighbourhood.com"
                  className="h-12 rounded-full border-white/15 bg-white/10 px-5 text-sm text-white placeholder:text-white/45 focus-visible:border-brand-lime focus-visible:ring-brand-lime/25"
                />
                <Button
                  type="button"
                  size="lg"
                  className="h-12 shrink-0 rounded-full bg-brand-lime px-6 text-sm text-brand-ink shadow-lg shadow-brand-ink/10 hover:bg-brand-lime/90"
                >
                  Subscribe
                  <HugeiconsIcon icon={SentIcon} strokeWidth={1.8} />
                </Button>
              </form>
              <p className="mt-3 text-center text-[11px] text-primary-foreground/50 sm:text-left">
                No spam, no pressure. Unsubscribe whenever you like.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
