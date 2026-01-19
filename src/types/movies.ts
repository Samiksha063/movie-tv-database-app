export type Movie = {
    id: number;
    title: string;
    tagline?: string;
    description: string;
    releaseDate: string;
    releaseYear: number;
    runtime: number;
    genres: string[];
    rating: { average: number; voteCount: number; ageRating: string };
    posterUrl: string;
    backdropUrl?: string;
    director: { name: string };
    cast: { name: string; character: string; profileUrl?: string }[];
    gallery?: string[];
    trailer: string;
    popularity?: number;
}
