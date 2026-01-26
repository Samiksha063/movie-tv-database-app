import type { TvShow } from '../../types/tvshows';
import styles from '../MovieCard/MovieCard.module.css';
import { Link } from 'react-router-dom';

type Props = {
    tvShow: TvShow;
}

export default function TvShowCard({tvShow}:Props){
    return(
      <Link to={`/tvShow/${tvShow.id}`} className={styles.cardLink}>

        <div className={styles.card}>
                <div className={styles.posterWrapper}>
                    <img
                        src={tvShow.posterUrl}
                        alt={tvShow.title}
                        className={styles.poster}
                    />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>{tvShow.title}</h2>
                    <p className={styles.date}>{tvShow.releaseYear}</p>
                </div>
            </div>
    </Link>

    );
}