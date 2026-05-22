# E-Learning Frontend

## Overview

E-Learning Frontend is a comprehensive web application built for an online learning platform. It provides a user-friendly interface for students and teachers to engage in educational activities, including course management, live streaming, quizzes, calendar scheduling, and secure authentication. The application supports both student and teacher roles with tailored features for each.

## Features

- **Authentication & User Management**
  - User registration and login (email/password, Google, Facebook)
  - OTP verification and password recovery
  - Role-based access (Student/Teacher)

- **Dashboard & Home**
  - Personalized dashboards for students and teachers
  - Course exploration and teacher profiles

- **Calendar & Scheduling**
  - Interactive calendar for managing classes and events
  - Event details and upcoming schedules

- **Quiz System**
  - Create and manage quizzes
  - Take quizzes with results tracking
  - Quiz settings and question management

- **Live Streaming**
  - Real-time video streaming for classes
  - Room creation and joining functionality
  - Chat integration during sessions

- **Messaging & Groups**
   - Real-time messaging between students and teachers
   - Subject-based group chats for each course
   - Teachers can create and manage groups for their students
   - Group discussions and announcements
   - Chat support during live sessions
    
- **Payment Integration**
  - Secure payment processing via Paymob
  - Support for cards and mobile wallets

- **Profile & Settings**
  - User profile management
  - Account settings, security, and notifications

- **Responsive Design**
  - Mobile-friendly interface using Tailwind CSS

## Technology Stack

### Frontend Framework
- **React 19** - Modern JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript for better development experience

### Build Tools & Development
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **Tailwind CSS** - Utility-first CSS framework

### State Management & Data Fetching
- **React Query (@tanstack/react-query)** - Powerful data synchronization for React
- **Context API** - React's built-in state management for global state

### UI Components & Libraries
- **React Router DOM** - Declarative routing for React
- **Framer Motion** - Animation library for React
- **React Big Calendar** - Calendar component
- **React Slick** - Carousel/slider component
- **React Hot Toast** - Toast notifications
- **Lucide React** - Icon library
- **React Loader Spinner** - Loading spinners

### Authentication & APIs
- **Axios** - HTTP client for API requests
- **Google OAuth (@react-oauth/google)** - Google authentication
- **Facebook Login (@greatsumini/react-facebook-login)** - Facebook authentication

### Live Streaming
- **LiveKit** - Real-time video and audio SDK

### Payment
- **Paymob Pixel** - Payment gateway integration

### Form Handling & Validation
- **Formik** - Form library for React
- **Yup** - Schema validation

### Date Handling
- **Date-fns** - Modern JavaScript date utility library
- **React Day Picker** - Date picker component

## Installation Instructions

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd e-learning-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (default Vite port)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## Usage

### For Students
1. Register or log in to access the student dashboard
2. Browse available teachers and courses in the Explore section
3. View and manage your calendar for scheduled classes
4. Join live streaming sessions
5. Take quizzes and view results
6. Make payments for courses or services

### For Teachers
1. Register as a teacher during signup
2. Create and manage your profile
3. Set up live streaming rooms for classes
4. Create and manage quizzes
5. Schedule events on the calendar
6. View student interactions and manage settings

### Example API Usage
The application uses Axios for API communication. Here's an example of how authentication might work:

```typescript
import axios from 'axios';

// Login example
const loginUser = async (credentials: { email: string; password: string }) => {
  try {
    const response = await axios.post('/api/auth/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
  }
};
```

## Project Structure

```
src/
├── APIs/                    # API configuration and utilities
├── Components/              # Reusable UI components
│   ├── Layout/             # Layout components
│   ├── Navbar/             # Navigation components
│   └── UI/                 # Basic UI elements
├── Features/               # Feature-based modules
│   ├── Auth/               # Authentication module
│   │   ├── Components/     # Auth-specific components
│   │   ├── Contexts/       # React contexts for auth state
│   │   ├── Hooks/          # Custom hooks for auth logic
│   │   ├── Pages/          # Auth pages (login, register)
│   │   ├── Services/       # API services for auth
│   │   ├── Types/          # TypeScript types for auth
│   │   ├── Utils/          # Utility functions
│   │   └── Validation/     # Form validation schemas
│   ├── Calendar/           # Calendar feature
│   ├── ExploreTeacher/     # Teacher exploration
│   ├── Home/               # Home dashboards
│   ├── Payment/            # Payment processing
│   ├── Profile/            # User profiles
│   ├── Quiz/               # Quiz system
│   ├── Setting/            # User settings
│   └── Streaming/          # Live streaming
├── Pages/                  # General pages
├── Routes/                 # Application routing
├── Types/                  # Global TypeScript types
└── Utils/                  # Global utilities
```


