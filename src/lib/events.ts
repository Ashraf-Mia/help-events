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
