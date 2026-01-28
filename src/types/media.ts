export type Media = {
  id: number;
  title: string;
  posterUrl: string;
  releaseYear: number;
  type: "movie" | "tvShow";

  category?: string;
  tagline?: string;
  description?: string;
  releaseDate: string;
  runtime?: number;

  genres: string[];
  rating: { average: number; voteCount: number; ageRating: string };

  backdropUrl?: string;
  director?: { name: string };
  cast?: { name: string; character: string; profileUrl?: string }[];
  gallery?: string[];
  trailer?: string;
  popularity?: number;
};
