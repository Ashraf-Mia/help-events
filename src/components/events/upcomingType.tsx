import Link from "next/link";

const UpcomingType = async ({ type }: { type?: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event-types`);
  const types: string[] = await res.json();

  const base =
    "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors";
  const active = "border-[#0E3B43] bg-[#0E3B43] text-white";
  const normal = "bg-white text-gray-700 hover:bg-gray-100";

  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/upcoming-events"
        className={`${base} ${!type ? active : normal}`}
      >
        All
      </Link>

      {types.map((t) => (
        <Link
          key={t}
          href={`/upcoming-events/${encodeURIComponent(t)}`}
          className={`${base} ${type === t ? active : normal}`}
        >
          {t}
        </Link>
      ))}
    </div>
  );
};

export default UpcomingType;
