import ManageEventCard from "@/components/events/manage-event-card";
import { auth } from "@/lib/auth";
import { IEvent } from "@/lib/events";
import { headers } from "next/headers";
import React from "react";

const ManageEventsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  let events: IEvent[] = [];
  if (user?.email) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/my-events/${user.email}`,
        {
          cache: "no-store",
        },
      );
      if (res.ok) {
        const data = await res.json();
        events = Array.isArray(data) ? data : [];
      }
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 border-b pb-6">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">My Events</h1>
          <p className="mt-2 max-w-xl text-sm text-gray-600 sm:text-base">
            Manage and view your upcoming events. Keep track of everything you
            have created and stay connected with your community.
          </p>
        </div>
      </div>

      {!user ? (
        <p className="py-12 text-center text-gray-500">
          Please log in to see your events.
        </p>
      ) : events.length === 0 ? (
        <p className="py-12 text-center text-gray-500">You have no event yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <ManageEventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageEventsPage;
