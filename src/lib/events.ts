import { getDatabase } from "@/lib/mongodb";

export type EventDocument = {
  title: string;
  slug: string;
  description: string;
  date: Date;
  endDate?: Date;
  location: string;
  category: string;
  coverImage: string;
  capacity: number;
  attendees: number;
  createdBy?: string;
  createdAt: Date;
};

export type UpcomingEvent = {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  endDate?: string;
  location: string;
  category: string;
  coverImage: string;
  capacity: number;
  attendees: number;
};

export async function getUpcomingEvents(limit = 6): Promise<UpcomingEvent[]> {
  const now = new Date();
  const events = await getDatabase()
    .collection<EventDocument>("events")
    .find({ date: { $gte: now } })
    .sort({ date: 1 })
    .limit(limit)
    .toArray();

  return events.map((event) => ({
    id: event._id.toString(),
    title: event.title,
    slug: event.slug,
    description: event.description,
    date: event.date.toISOString(),
    endDate: event.endDate?.toISOString(),
    location: event.location,
    category: event.category,
    coverImage: event.coverImage,
    capacity: event.capacity,
    attendees: event.attendees,
  }));
}
