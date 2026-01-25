import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import type { Movie } from "../../types/movies";
import { getAllMovies } from "../../dao/movies.dao";
import { searchMovies } from "../../utils/filter/searchFilter";

import MovieCard from "../../components/MovieCard/MovieCard";
import styles from './Search.module.css';

export default function Search() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(()=>{
        async function loadMovies(){
            const allMovies = await getAllMovies();
            setMovies(allMovies);
        }
        loadMovies();
    },[]);

    const results = query ? searchMovies(movies,query) : [] ;

    return (
        <div className={styles.searchPage}>
            <h2>Search Results</h2>
            <p>Searching for: <strong>{query}</strong></p>

            {results.length > 0 ? (
                <div className={styles.grid}>
                {results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
                </div>
            ) : 
                <p className={styles.noResults}>
                    No results found for "{query}"
                </p>
            }
            
        </div>
    );
}
