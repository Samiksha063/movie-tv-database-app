import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "../../dao/movies.dao";
import type { Movie } from "../../types/movies";

import styles from './MovieDetail.module.css';

export default function MovieDetail(){
    const {id} = useParams();
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(()=>{
        async function fetchMovie(){
            if(!id) { return; }
            const movieData = await getMovieById(Number(id));
            setMovie(movieData || null);
        }
        fetchMovie();
    },[id]);

    if(!movie){
        return <p> Movie details not found</p>
    }

    return(
        <div className={styles.detail}>
      <h1 className={styles.title}>{movie.title} ({movie.releaseYear})</h1>
      <img src={movie.posterUrl} alt={movie.title} className={styles.poster} />
      <p className={styles.genre}>{movie.genres}</p>
    </div>
    );
}