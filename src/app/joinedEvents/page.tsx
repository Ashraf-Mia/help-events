import JoinedEventCard from "@/components/events/joined-event-card";
import { auth } from "@/lib/auth";
import { IJoinedEvent } from "@/lib/events";
import { getTokenFromServer } from "@/lib/getTokenFromServer";
import { headers } from "next/headers";

const JoinedEventsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  let events: IJoinedEvent[] = [];
  // console.log("ashraf", events);

  const token = await getTokenFromServer();

  if (user?.email) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/my-joined/${user.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
          cache: "no-store",
        },
      );
      if (res.ok) {
        const data = await res.json();
        events = Array.isArray(data) ? data : [];
      }
    } catch (error) {
      console.error("Failed to fetch joined events:", error);
    }
  }
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 border-b pb-6">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">Joined Events</h1>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
            Keep track of the events you have joined and view the details of
            each one. Stay connected with your community.
          </p>
        </div>
      </div>

      {events.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          You have not joined any events yet.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <JoinedEventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JoinedEventsPage;
