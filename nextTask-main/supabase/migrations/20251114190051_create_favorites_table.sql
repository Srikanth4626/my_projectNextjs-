/*
  # Create Favorites Table

  1. New Tables
    - `favorites`
      - `id` (uuid, primary key) - Unique identifier for each favorite
      - `user_id` (uuid) - User identifier for tracking favorites per user
      - `movie_id` (integer) - TMDB movie ID
      - `title` (text) - Movie title
      - `poster_path` (text) - Movie poster path
      - `created_at` (timestamptz) - When the favorite was added

  2. Security
    - Enable RLS on `favorites` table
    - Add policy for users to read their own favorites
    - Add policy for users to insert their own favorites
    - Add policy for users to delete their own favorites
*/

CREATE TABLE IF NOT EXISTS favorites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  movie_id integer NOT NULL,
  title text NOT NULL,
  poster_path text NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, movie_id)
);

ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own favorites"
  ON favorites
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own favorites"
  ON favorites
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own favorites"
  ON favorites
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_favorites_movie_id ON favorites(movie_id);
