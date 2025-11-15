import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import MovieRow from '@/components/MovieRow';
import { fetchTrendingMovies, fetchMoviesByCategory } from '@/lib/tmdb';

export default async function Home() {
  const [trendingMovies, popularMovies, topRatedMovies, upcomingMovies] =
    await Promise.all([
      fetchTrendingMovies(),
      fetchMoviesByCategory('popular'),
      fetchMoviesByCategory('top_rated'),
      fetchMoviesByCategory('upcoming'),
    ]);

  const heroMovie = trendingMovies[0];

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroBanner movie={heroMovie} />
      <div className="relative -mt-32 space-y-12 pb-20">
        <MovieRow movies={trendingMovies} categoryTitle="Trending Now" />
        <MovieRow movies={popularMovies} categoryTitle="Popular on Streamix" />
        <MovieRow movies={topRatedMovies} categoryTitle="Top Rated" />
        <MovieRow movies={upcomingMovies} categoryTitle="Coming Soon" />
      </div>
    </main>
  );
}
