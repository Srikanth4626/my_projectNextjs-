import Image from 'next/image';
import { Play, Info } from 'lucide-react';
import { Movie } from '@/types/movie';
import { IMAGE_BASE_URL } from '@/lib/tmdb';

interface HeroBannerProps {
  movie: Movie;
}

export default function HeroBanner({ movie }: HeroBannerProps) {
  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <Image
          src={`${IMAGE_BASE_URL}/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex h-full max-w-screen-2xl items-center px-4 md:px-8">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-bold text-white md:text-6xl lg:text-7xl">
            {movie.title}
          </h1>
          <p className="line-clamp-3 text-base text-gray-200 md:text-lg">
            {movie.overview}
          </p>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 rounded bg-white px-6 py-3 font-semibold text-black transition-all hover:bg-gray-200">
              <Play className="h-5 w-5 fill-black" />
              Play
            </button>
            <button className="flex items-center gap-2 rounded bg-gray-500/50 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-gray-500/70">
              <Info className="h-5 w-5" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
