import { useEffect, useState } from "react";
import type { Movie } from "../../types/movies";
import { getAllMovies } from "../../dao/movies.dao";
import { seedMoviesDB } from "../../services/movies.service";

import MovieCard from '../../components/MovieCard/MovieCard';
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import styles from './Movies.module.css';

export default function Movies(){

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(()=>{
        async function init(){
            await seedMoviesDB();
            const allMovies = await getAllMovies();
            setMovies(allMovies);
        }
        init();
    },[]);

    return (
      <div className={styles.mainContainer}>

        <aside className={styles.filterPanel}>
          <FilterPanel />
        </aside>

        <main className={styles.moviesContent}>
          {/* <h2 className={styles.heading}>Movies</h2> */}
          <div className={styles.grid}>

            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}

          </div>
        </main>
      </div>
  );


}