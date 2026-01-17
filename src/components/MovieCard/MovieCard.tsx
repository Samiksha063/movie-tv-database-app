import type {Movie} from '../../dao/movies.dao';
import styles from './MovieCard.module.css';
import { Link } from 'react-router-dom';

type Props = {
    movie: Movie;
}

export default function MovieCard({movie}:Props){
    return(
      <Link to={`/movies/${movie.id}`}>

        <div className={styles.card}>
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className={styles.poster}
      />
      <p className={styles.title}>
        {movie.title} ({movie.releaseYear})
        {movie.genre}
      </p>
    </div>
    </Link>

    );
}