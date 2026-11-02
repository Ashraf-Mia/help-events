import EventsView from "@/components/events/events-veiw";

const UpcomingEventsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) => {
  const { search } = await searchParams;

  return <EventsView search={search} />;
};

export default UpcomingEventsPage;
