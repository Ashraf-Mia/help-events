import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("MONGODB_URI is not set. Run with: npm run seed:events");
  process.exit(1);
}

const now = new Date();

function daysFromNow(days, hour = 9, minute = 0) {
  const date = new Date(now);
  date.setDate(date.getDate() + days);
  date.setHours(hour, minute, 0, 0);
  return date;
}

const events = [
  {
    title: "Riverside Community Garden Reset",
    slug: "riverside-community-garden-reset",
    description:
      "Roll up your sleeves for a morning of planting, painting raised beds, and turning the neighbourhood garden into a shared green space again.",
    date: daysFromNow(3, 9),
    endDate: daysFromNow(3, 12),
    location: "Riverside Community Garden",
    category: "Environment",
    coverImage: "/images/event-community-garden.jpg",
    capacity: 40,
    attendees: 28,
  },
  {
    title: "Neighbourhood Food Drive",
    slug: "neighbourhood-food-drive",
    description:
      "Help sort and pack fresh groceries for local families. Every volunteer hour turns into a warmer welcome at someone's table.",
    date: daysFromNow(5, 10),
    endDate: daysFromNow(5, 14),
    location: "Eastside Community Hall",
    category: "Food",
    coverImage: "/images/event-food-drive.jpg",
    capacity: 32,
    attendees: 21,
  },
  {
    title: "Tree Planting Morning",
    slug: "tree-planting-morning",
    description:
      "Plant native saplings along the creek trail with neighbours and local ecology volunteers. Tools, gloves, and breakfast are provided.",
    date: daysFromNow(9, 8, 30),
    endDate: daysFromNow(9, 11, 30),
    location: "Willow Creek Trail",
    category: "Environment",
    coverImage: "/images/event-tree-planting.jpg",
    capacity: 60,
    attendees: 44,
  },
  {
    title: "Youth Mentorship Mixer",
    slug: "youth-mentorship-mixer",
    description:
      "Meet local mentors, share a skill, and help young people find the confidence and connections to take their next step.",
    date: daysFromNow(12, 17, 30),
    endDate: daysFromNow(12, 20),
    location: "The Loft Youth Centre",
    category: "Youth",
    coverImage: "/images/event-youth-mentorship.jpg",
    capacity: 24,
    attendees: 18,
  },
  {
    title: "Winter Coat & Blanket Drive",
    slug: "winter-coat-and-blanket-drive",
    description:
      "Collect, sort, and distribute warm coats and blankets before the cold settles in. Donations welcome at the door.",
    date: daysFromNow(16, 11),
    endDate: daysFromNow(16, 16),
    location: "Northgate Library",
    category: "Community",
    coverImage: "/images/event-donation-drive.jpg",
    capacity: 20,
    attendees: 12,
  },
  {
    title: "Community Kitchen Supper",
    slug: "community-kitchen-supper",
    description:
      "Cook a shared meal with neighbours, learn a new recipe, and leave with a full plate and a few new friends.",
    date: daysFromNow(20, 18),
    endDate: daysFromNow(20, 21),
    location: "St. Mary's Community Kitchen",
    category: "Food",
    coverImage: "/images/event-community-meal.jpg",
    capacity: 36,
    attendees: 30,
  },
  {
    title: "Park Clean-up + Picnic",
    slug: "park-clean-up-picnic",
    description:
      "A family-friendly morning of litter-picking, seed-bomb making, and a picnic under the old oak trees.",
    date: daysFromNow(24, 9),
    endDate: daysFromNow(24, 13),
    location: "Maplewood Park",
    category: "Environment",
    coverImage: "/images/gallery-hands.jpg",
    capacity: 50,
    attendees: 17,
  },
  {
    title: "Home Repair Day",
    slug: "home-repair-day",
    description:
      "Join skilled volunteers to repair fences, fix leaky taps, and make homes safer for neighbours who need a hand.",
    date: daysFromNow(30, 9),
    endDate: daysFromNow(30, 15),
    location: "Southside Neighbourhood Hub",
    category: "Community",
    coverImage: "/images/event-neighborhood-repair.jpg",
    capacity: 18,
    attendees: 9,
  },
];

const client = new MongoClient(uri);

try {
  await client.connect();
  const collection = client.db("help-events").collection("events");

  for (const event of events) {
    await collection.updateOne(
      { slug: event.slug },
      {
        $set: { ...event, updatedAt: now, createdBy: "Help Events team" },
        $setOnInsert: { createdAt: now },
      },
      { upsert: true },
    );
  }

  const total = await collection.countDocuments();
  console.log(`Seeded ${events.length} events. The collection now has ${total} events.`);
} finally {
  await client.close();
}
