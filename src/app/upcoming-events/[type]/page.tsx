import EventsView from "@/components/events/events-veiw";

const UpcomingEventsByTypePage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ type: string }>;
  searchParams: Promise<{ search?: string }>;
}) => {
  const { type } = await params;

  const { search } = await searchParams;

  const realType = decodeURIComponent(type);

  return <EventsView type={realType} search={search} />;
};

export default UpcomingEventsByTypePage;
