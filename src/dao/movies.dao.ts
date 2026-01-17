import { getDB } from "../data/db";
import type { Movie } from "../types/movies";

export function addMovie(movie: Movie){
    const db = getDB();
    const transaction = db.transaction("movies","readwrite");
    const store = transaction.objectStore("movies");

    store.put(movie);

    transaction.oncomplete = () => {
        console.log(`Movie: "${movie.title}" added successfully`);

    }

    transaction.onerror = () => {
        console.log("Failed to add movie", transaction.error);
    }
}

export function getAllMovies() : Promise<Movie[]>{
    return new Promise((resolve, reject) => {
        const db = getDB();
        const transaction = db.transaction("movies","readonly");
        const store = transaction.objectStore("movies");

        const request = store.getAll();

        request.onsuccess = () => {
            resolve(request.result);
        }

        request.onerror = () => {
            reject(request.error);
        }
    })
}

export function getMovieById(id:number) : Promise<Movie | undefined>{

    return new Promise((resolve, reject) => {
        const db = getDB();
        const transaction = db.transaction("movies", "readonly");
        const store = transaction.objectStore("movies");
        const request = store.get(id);

        request.onsuccess = () => {
            resolve(request.result);
        }

        request.onerror = () => {
            reject(request.error);
        }

    })
}

export function movieExists(id:number) : Promise<boolean>{

    return new Promise((resolve, reject) => {
        const db = getDB();
        const transaction = db.transaction("movies", "readonly");
        const store = transaction.objectStore("movies");
        const request = store.getAll(id);
        
        request.onsuccess = () => {
            if(request.result){
                resolve(true);
            }else{
                resolve(false);
            }
        }

        request.onerror = () => {
            reject(request.error);
        }
    })
}

