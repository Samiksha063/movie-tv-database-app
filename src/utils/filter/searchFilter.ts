import type { Movie } from "../../types/movies";

export function searchMovies(movies: Movie[], query: string){
    const lowerQuery = query.toLowerCase();

    return movies.filter(movie => movie.title.toLowerCase().includes(lowerQuery) );
    

}