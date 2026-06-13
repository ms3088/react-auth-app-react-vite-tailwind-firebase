# React Auth + Protected Routes + Local Storage

## Assignment Overview 
This project demostrates authentication in React using Firebase Google Login, protected routes, localStorage session persistance, and automatic session expiration using TTL (Time to Live). 

## Features
-React + Vite setup
-Tailwind CSS Integration
Google Authentication using Firebase
Protected Dashboard Route
User data stored in localStorage
Session persitance after page refresh.
Automatic session expiration after 24 hours(TTL)
Logout functionality
Route redirection for unauthorized users.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Firebase Authentication
- React Router DOM
- Local Storage API



## Setup Instructions

### 1. Clone Repository
git clone https://github.com/your-username/react-auth-assignment.git
cd react-auth-assignment


### 2. Install Dependencies
npm install


### 3. Configure Firebase
Create a Firebase project and enable **Google Authentication**.

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Run the Project
npm run dev


Application will start at:
http://localhost:5173


## Authentication Flow

1. User clicks **Login with Google**.
2. Firebase authenticates the user.
3. User name and email are stored in localStorage.
4. A timestamp is stored for TTL validation.
5. User is redirected to `/dashboard`.
6. On page refresh, session is restored automatically.
7. If TTL exceeds 24 hours, localStorage is cleared and user is redirected to login.
8. Logout removes localStorage data and redirects to `/`.

## Protected Route

The `/dashboard` route is protected.

- Authenticated users can access it.
- Unauthenticated users are redirected to `/`.

## Local Storage Data Format

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "loginTime": 1710000000000
}
```

## What is TTL?

**TTL (Time To Live)** is the duration for which stored data remains valid.

In this project:

- TTL = 24 hours
- Session data is checked whenever the application loads.
- If the stored data is older than 24 hours, it is automatically removed.
- This improves security and prevents stale sessions.

## Demo Video

[Add your video link here:](https://drive.google.com/file/d/1CkKSiJsJcveOs7jspL8KUdKn9SHK6wTW/view?usp=sharing)


The video demonstrates:

- Google Login Flow
- localStorage Data
- Session Restore on Refresh
- TTL Explanation
- Logout Functionality

