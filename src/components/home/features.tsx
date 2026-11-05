import {
  CalendarPlus,
  ClipboardList,
  HeartHandshake,
  Search,
} from "lucide-react";

const features = [
  {
    icon: CalendarPlus,
    title: "Create in minutes",
    text: "Set a date, place and cause. Your event goes live right away.",
  },
  {
    icon: Search,
    title: "Find help nearby",
    text: "Browse events by type or search by title and location.",
  },
  {
    icon: HeartHandshake,
    title: "Join with one click",
    text: "Sign in once and join any upcoming event instantly.",
  },
  {
    icon: ClipboardList,
    title: "Manage your events",
    text: "Edit or remove the events you created, all in one place.",
  },
];

const Features = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Everything you need to do good, together
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
          From the first idea to the last volunteer, in one place.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-[#FFC94A]/30">
              <f.icon className="size-6 text-[#0E3B43]" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
