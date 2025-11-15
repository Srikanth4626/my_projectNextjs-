import { Movie, MovieDetail, TMDBResponse } from '@/types/movie';

const TMDB_API_KEY = 'ab12cdef34567890abcdef1234567890';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies(): Promise<Movie[]> {
  const response = await fetch(
    `${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch trending movies');
  }

  const data: TMDBResponse = await response.json();
  return data.results;
}

export async function fetchMoviesByCategory(category: string): Promise<Movie[]> {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${category}?api_key=${TMDB_API_KEY}`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch ${category} movies`);
  }

  const data: TMDBResponse = await response.json();
  return data.results;
}

export async function fetchMovieDetails(id: number): Promise<MovieDetail> {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }

  return response.json();
}

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
