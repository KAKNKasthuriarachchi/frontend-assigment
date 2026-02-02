# Scalable Dashboard - Users Management

A read-only dashboard built with Next.js 14, TypeScript, and Tailwind CSS that displays user data from JSONPlaceholder API.

## Features Implemented

### Core Features
- ✅ List page displaying users in a grid layout
- ✅ Details page for individual user information
- ✅ Loading states (skeleton loaders)
- ✅ Error states with user-friendly messages
- ✅ Empty state for no search results
- ✅ Client-side search by name or email
- ✅ Filter by city
- ✅ TypeScript throughout (no `any` types)

### Bonus Features (2 required)
- ✅ Sorting by name or email
- ✅ Skeleton loaders for better UX

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- JSONPlaceholder API

## Setup Instructions

1. Clone the repository:
```bash
git clone <your-repo-url>
cd scalable-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
scalable-dashboard/
├── app/
│   ├── users/
│   │   ├── [id]/
│   │   │   └── page.tsx          # Individual user details page
│   │   ├── page.tsx               # Users list page with filters
│   │   └── loading.tsx            # Loading state for users routes
│   ├── layout.tsx                 # Root layout with navigation
│   ├── page.tsx                   # Home page (redirects to /users)
│   └── globals.css                # Global styles and Tailwind imports
├── components/
│   ├── UserCard.tsx               # User card component for grid display
│   ├── UserCardSkeleton.tsx       # Skeleton loader for user cards
│   ├── SearchBar.tsx              # Search input component
│   ├── FilterSelect.tsx           # Dropdown filter component
│   └── ErrorMessage.tsx           # Error state component
├── lib/
│   ├── api.ts                     # API functions for fetching users
│   └── types.ts                   # TypeScript interfaces and types
├── public/                        # Static assets
├── README.md                      # Project documentation
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
└── tailwind.config.js             # Tailwind CSS configuration
```

### Folder Structure Explanation

- **`app/`**: Contains all route components using Next.js 14 App Router
  - Server components for initial data fetching
  - Client components for interactive features (search, filter, sort)
  
- **`components/`**: Reusable UI components
  - Separation of concerns for better maintainability
  - Each component handles a specific UI responsibility

- **`lib/`**: Utility functions and type definitions
  - `api.ts`: Centralized API calls to JSONPlaceholder
  - `types.ts`: TypeScript interfaces for type safety

## Approximate Time Spent

**Total: ~4-5 hours**

- Project setup and configuration: 30 minutes
- User list page with grid layout: 1 hour
- User details page: 45 minutes
- Search and filter functionality: 1 hour
- Sorting feature: 30 minutes
- Skeleton loaders and loading states: 45 minutes
- Error handling and empty states: 30 minutes
- Styling and responsive design: 45 minutes
- Testing and bug fixes: 30 minutes

## Performance Considerations

- Server-side data fetching for initial load
- Client-side filtering for instant feedback
- Skeleton loaders for perceived performance
- Responsive grid layout using Tailwind CSS
- TypeScript for compile-time error detection

## Future Enhancements

- Pagination for large datasets
- Advanced filtering (multiple cities, company)
- User preferences persistence (localStorage)
- Dark mode support
- Unit and integration tests
