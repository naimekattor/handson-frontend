# Volunteer Events Platform

## 📌 Project Overview

This is a full-stack web application that allows users to browse, search, and create volunteer events. Users must authenticate using JWT to create an event. The platform enables users to join events and engage in community activities.

## 📌 Technologies Used

- **Frontend:** Next.js, React, Tailwind CSS, Material UI, Lucide Icons
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT (JSON Web Token)
- **Netlify (Frontend):** [Live Demo](https://zesty-medovik-79fc47.netlify.app/)

## 📌 Features

- 🔐 **User Authentication:** JWT-based authentication for secure login.
- 📌 **Create & Manage Events:** Users can add, edit, and delete events.
- 🔍 **Search & Filter:** Find events by title, category, or description.
- 📅 **Event Details Page:** Each event has a dedicated page with full details.
- 📌 **Responsive Design:** Fully responsive UI for all devices.

## 📌 Database Schema

```json
Event {
  _id: ObjectId,
  title: String,
  description: String,
  category: String,
  date: String,
  time: String,
  location: String,
  attendees: Number,
  user: ObjectId (Reference to User)
}

User {
  _id: ObjectId,
  name: String,
  email: String,
  password: String (hashed)
}
```

## 📌 Setup Instructions

### 1️⃣ Clone the repository

```sh
git clone https://github.com/your-repo.git
cd your-repo
```

### 2️⃣ Install dependencies

#### Backend

```sh
cd backend
npm install
```

#### Frontend

```sh
cd frontend
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the backend with the following:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the project

#### Start Backend

```sh
npm run dev
```

#### Start Frontend

```sh
npm run dev
```

## 📌 API Documentation

### 1️⃣ Authentication

- **POST `/api/auth/login`** – Login user
- **POST `/api/auth/register`** – Register a new user
- **GET `/api/auth/profile`** – Get authenticated user

### 2️⃣ Events

- **GET `/api/events/`** – Get all events
- **GET `/api/events/:id`** – Get event by ID
- **POST `/api/events/`** – Create a new event (🔐 Requires authentication)
- **PUT `/api/events/:id`** – Update an event (🔐 Requires authentication)
- **DELETE `/api/events/:id`** – Delete an event (🔐 Requires authentication)

## 📌 Running the Project

### Development Mode

Run both frontend and backend using:

```sh
npm run dev
```

### Production Mode

Deploy using services like Vercel (frontend) and Railway/Heroku (backend). Ensure the `.env` file is correctly set up.

---

🚀 **Enjoy building and contributing!**
