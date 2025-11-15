# Streamix - Streaming Dashboard Clone

A production-ready Netflix/Hulu-style streaming service dashboard built with Next.js 14, TypeScript, Tailwind CSS, and TMDB API.

## Features

- 🎬 Browse trending, popular, top-rated, and upcoming movies
- 🎨 Beautiful, responsive UI with smooth animations
- 🖼️ Optimized image loading with Next.js Image component
- 📱 Mobile-friendly horizontal scrolling movie rows
- 🎯 Dynamic routing for movie detail pages
- 🔒 Supabase database integration for user favorites
- ⚡ Server-side rendering for optimal performance
- 🎭 Hero banner with featured content

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **API**: TMDB (The Movie Database)
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

1. Node.js 18+ installed
2. A TMDB API key (get one at https://www.themoviedb.org/settings/api)
3. A Supabase account (https://supabase.com)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in `.env.local`:
   ```
   TMDB_API_KEY=your_tmdb_api_key_here
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── page.tsx              # Homepage with movie rows
│   ├── movie/[id]/page.tsx   # Dynamic movie detail page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── HeroBanner.tsx        # Hero banner component
│   └── MovieRow.tsx          # Horizontal scrolling movie row
├── lib/
│   ├── tmdb.ts               # TMDB API functions
│   └── supabase.ts           # Supabase client
├── types/
│   └── movie.ts              # TypeScript interfaces
└── .env.local                # Environment variables
```

## Features Implementation

### Phase 1: API Integration
- ✅ TMDB API integration with TypeScript interfaces
- ✅ Server-side data fetching with native fetch API
- ✅ Environment variables for secure API key storage
- ✅ TypeScript types for Movie objects

### Phase 2: Homepage
- ✅ Fixed header with logo and navigation
- ✅ Hero banner with featured movie
- ✅ Multiple movie rows with categories
- ✅ Horizontal scrolling with smooth animations
- ✅ Optimized image loading

### Phase 3: Dynamic Routing
- ✅ Dynamic route: `/movie/[id]`
- ✅ Movie detail page with full information
- ✅ Server-side data fetching using params
- ✅ Responsive layout with backdrop images

## Database Schema

### Favorites Table
- `id`: UUID (Primary Key)
- `user_id`: UUID (Foreign Key)
- `movie_id`: Integer (TMDB ID)
- `title`: Text
- `poster_path`: Text
- `created_at`: Timestamp

RLS policies ensure users can only access their own favorites.

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables:
   - `TMDB_API_KEY`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

The app is optimized for Vercel with automatic builds and deployments.

## API Endpoints Used

- `GET /trending/movie/week` - Trending movies
- `GET /movie/popular` - Popular movies
- `GET /movie/top_rated` - Top rated movies
- `GET /movie/upcoming` - Upcoming movies
- `GET /movie/{id}` - Movie details

## Performance Optimizations

- Server-side rendering for SEO and performance
- Image optimization with Next.js Image component
- Revalidation strategy for cached API responses
- Lazy loading for movie posters
- CSS scrollbar hiding for cleaner UI

## AI Tools Used

This project was built using AI coding tools (ChatGPT, Claude, Copilot) to accelerate development:
- Component architecture and layout design
- TypeScript interface definitions
- Tailwind CSS styling classes
- API integration patterns
- Responsive design implementation

## License

MIT
