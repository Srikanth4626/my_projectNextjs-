'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie } from '@/types/movie';
import { IMAGE_BASE_URL } from '@/lib/tmdb';

interface MovieRowProps {
  movies: Movie[];
  categoryTitle: string;
}

export default function MovieRow({ movies, categoryTitle }: MovieRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -800 : 800;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="group relative space-y-2 px-4 md:px-8">
      <h2 className="text-xl font-semibold text-white md:text-2xl">
        {categoryTitle}
      </h2>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 z-10 flex h-full w-12 items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <ChevronLeft className="h-8 w-8 text-white" />
        </button>

        <div
          ref={rowRef}
          className="flex gap-2 overflow-x-scroll scrollbar-hide md:gap-3"
        >
          {movies.map((movie) => (
            <Link
              key={movie.id}
              href={`/movie/${movie.id}`}
              className="group/item relative h-28 min-w-[180px] transition-transform duration-300 hover:scale-105 md:h-36 md:min-w-[240px]"
            >
              <Image
                src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`}
                alt={movie.title}
                fill
                className="rounded object-cover"
                sizes="(max-width: 768px) 180px, 240px"
              />
              <div className="absolute inset-0 flex items-end rounded bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover/item:opacity-100">
                <p className="p-3 text-sm font-semibold text-white">
                  {movie.title}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 z-10 flex h-full w-12 items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <ChevronRight className="h-8 w-8 text-white" />
        </button>
      </div>
    </div>
  );
}
