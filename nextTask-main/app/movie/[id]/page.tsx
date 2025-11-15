import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Play, Plus, ThumbsUp, Star } from 'lucide-react';
import { fetchMovieDetails } from '@/lib/tmdb';
import { IMAGE_BASE_URL } from '@/lib/tmdb';

interface MoviePageProps {
  params: {
    id: string;
  };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const movieId = parseInt(params.id);
  const movie = await fetchMovieDetails(movieId);

  const releaseYear = new Date(movie.release_date).getFullYear();
  const runtime = `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`;

  return (
    <main className="min-h-screen bg-black">
      <div className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src={`${IMAGE_BASE_URL}/original${movie.backdrop_path}`}
            alt={movie.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full flex-col">
          <div className="p-4 md:p-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white transition-colors hover:text-gray-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>

          <div className="mx-auto flex w-full max-w-screen-2xl flex-1 items-center px-4 md:px-8">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl font-bold text-white md:text-6xl lg:text-7xl">
                {movie.title}
              </h1>

              {movie.tagline && (
                <p className="text-lg italic text-gray-300 md:text-xl">
                  {movie.tagline}
                </p>
              )}

              <div className="flex items-center gap-4 text-sm text-gray-300 md:text-base">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  <span className="font-semibold">
                    {movie.vote_average.toFixed(1)}
                  </span>
                </div>
                <span>{releaseYear}</span>
                <span>{runtime}</span>
                <span className="rounded border border-gray-400 px-2 py-0.5 text-xs">
                  {movie.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="rounded-full bg-gray-700/50 px-4 py-1 text-sm text-white backdrop-blur-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              <p className="text-base leading-relaxed text-gray-200 md:text-lg">
                {movie.overview}
              </p>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 rounded bg-white px-8 py-3 font-semibold text-black transition-all hover:bg-gray-200">
                  <Play className="h-5 w-5 fill-black" />
                  Play
                </button>
                <button className="flex items-center justify-center rounded bg-gray-700/50 p-3 backdrop-blur-sm transition-all hover:bg-gray-700">
                  <Plus className="h-6 w-6 text-white" />
                </button>
                <button className="flex items-center justify-center rounded bg-gray-700/50 p-3 backdrop-blur-sm transition-all hover:bg-gray-700">
                  <ThumbsUp className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
