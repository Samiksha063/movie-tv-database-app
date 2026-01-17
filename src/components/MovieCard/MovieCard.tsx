import type { Movie } from '../../types/movies';
import styles from './MovieCard.module.css';
import { Link } from 'react-router-dom';

type Props = {
    movie: Movie;
}

export default function MovieCard({movie}:Props){
    return(
      <Link to={`/movies/${movie.id}`} className={styles.cardLink}>

        <div className={styles.card}>
                <div className={styles.posterWrapper}>
                    <img
                        src={movie.posterUrl}
                        alt={movie.title}
                        className={styles.poster}
                    />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>{movie.title}</h2>
                    <p className={styles.date}>{movie.releaseYear}</p>
                </div>
            </div>
    </Link>

    );
}