import EventCard from "@/components/events/event-card";
import { IEvent } from "@/lib/events";
import React from "react";

const UpcomingEventsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  const data = await res.json();
  console.log(data);

  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
      {data.map((e: IEvent) => (
        <EventCard key={e._id} event={e} />
      ))}
    </div>
  );
};

export default UpcomingEventsPage;
