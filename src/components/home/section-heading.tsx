import type { ReactNode } from "react";
import { cn } from "cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "sm:flex-col sm:items-center sm:text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.045em] text-balance text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            {description}
          </p>
        ) : null}
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
