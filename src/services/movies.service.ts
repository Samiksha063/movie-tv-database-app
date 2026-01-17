import type { Movie } from "../types/movies";
import { addMovie, movieExists } from "../dao/movies.dao";

export async function loadMovies() : Promise<Movie[]>{
    const response = await fetch("/data/movies.json");
    const movies: Movie[] = await response.json();
    return movies;
}

export async function seedMoviesDB(){
    const movies: Movie[] = await loadMovies();

    for(let movie of movies){
        const exists = await movieExists(movie.id);
        // addMovie(movie);
        if(!exists){
            addMovie(movie);
            console.log("Movie added successfully");
        }else{
            console.log("Skipped. Movie already exists");
        }

        
    }

    console.log("Seeding complete");
}