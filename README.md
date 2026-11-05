# Help Events – Social Development Events Platform

Help Events is a community-based event management platform. It helps people create, join, and manage social service events in their local areas.

The main goal of this platform is to bring people together and help others through community work.

## Live Website

- **Live Site:** https://helpeventsfrontend.vercel.app/

## GitHub Repositories

- **Client Side:** https://github.com/Ashraf-Mia/help-events
- **Server Side:** https://github.com/Ashraf-Mia/help-event-server

## Features

- Users can create social service events and share them with others.
- Anyone can view upcoming events without logging in.
- Logged-in users can join and leave events.
- Users can see all the events they have joined.
- Users can manage, update, and delete their own events.
- Users can search events and filter them by category.
- Users can register and log in using email and password.
- Users can also log in using Google or GitHub.
- Users can change between light and dark themes.
- The website works on mobile, tablet, and desktop devices.

## Technologies Used

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Shadcn UI

### Backend

- Node.js
- Express.js
- MongoDB

### Authentication

- Better Auth
- MongoDB Adapter
- JWT

## Main Pages

- **Home:** Shows the banner, features, upcoming events, gallery, and newsletter section.
- **Upcoming Events:** Shows all future events created by users.
- **Event Details:** Shows full event information and allows logged-in users to join an event.
- **Create Event:** Allows logged-in users to create new events.
- **Manage Events:** Allows users to update and delete their own events.
- **Joined Events:** Shows all events joined by the logged-in user.
- **Login & Register:** Allows users to create an account and log in.

## Installation

### 1. Clone the Client Repository

```bash
git clone https://github.com/Ashraf-Mia/help-events.git
cd help-events
npm install
```

### 2. Clone the Server Repository

```bash
git clone https://github.com/Ashraf-Mia/help-event-server.git
cd help-event-server
npm install
```

### 3. Setup Environment Variables

Create `.env.local` in the client project and add the required environment variables.

Create `.env` in the server project and add your MongoDB connection URL and other required environment variables.

Do not share your secret keys or passwords publicly.

### 4. Run the Server

```bash
npm run dev
```

If your server uses Nodemon:

```bash
nodemon index.js
```

### 5. Run the Client

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

## Purpose

Help Events is built to make community service easier. It helps people work together, support those in need, and make a positive change in society.
