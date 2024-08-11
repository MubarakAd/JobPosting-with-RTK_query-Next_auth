# Job Posting Project

## Description

This project is a job posting application built with Next.js, Tailwind CSS, and TypeScript. It provides users with a modern and responsive interface to view job postings, manage job listings, and interact with the application seamlessly across different devices. The application supports user authentication with Google and custom email/password sign-in. It also features data fetching from an API using RTK Query.

## Features

- **Display Job Postings in Card Format:** Job postings are displayed in a well-organized card layout for easy viewing.
- **Dashboard to Manage Job Postings:** An admin dashboard to add, edit, and delete job postings.
- **Responsive Design:** Ensures a great user experience on both mobile and desktop devices.
- **Dynamic Data Fetching with RTK Query:** Utilizes RTK Query for efficient and scalable data fetching and caching.
- **Enhanced UI with Tailwind CSS:** Provides a utility-first CSS framework for rapid UI development and consistent styling.
- **User Authentication:** Users can sign in using their Google account or with custom email and password.

## Technologies Used

- **Next.js:** A React framework for building server-side rendered applications.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **TypeScript:** A strongly typed programming language that builds on JavaScript, offering better tooling and type safety.
- **RTK Query:** A powerful data fetching and caching tool integrated with Redux Toolkit.
- **NextAuth.js:** A library for handling authentication with support for various providers, including Google and custom email/password.

## Getting Started

### Prerequisites

- Node.js (version 12.x or later)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MubarakAd/JobPosting-with_RTK_Query.git
   cd job-posting-card

2. **Install dependencies:**
    ```bash
    npm install
3. **Set up environment variables:**
    ```bash
    ***Create a .env.local file at the root of your project and add the following variables:***
      NEXTAUTH_URL=http://localhost:3000
      NEXTAUTH_SECRET=your-next-auth-secret
      GOOGLE_CLIENT_ID=your-google-client-id
      GOOGLE_CLIENT_SECRET=your-google-client-secret

4. Run the development server:
   npm run dev
5. Open http://localhost:3000 with your browser to see the result.
# Demo




