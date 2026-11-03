export interface IEvent {
  _id: string;
  title: string;
  description: string;
  type: string;
  date: string;
  location: string;
  email: string;
  thumbnail: string;
  creatorName?: string | null;
  creatorImage?: string | null;
}

export interface IJoinedEvent extends IEvent {
  eventId: string;
  userEmail: string;
  userName?: string;
  userImage?: string | null;
  joinedAt?: string;
}
