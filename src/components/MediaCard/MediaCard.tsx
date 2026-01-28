import { Link } from "react-router-dom";

import type {Media} from '../../types/media';
import styles from './MediaCard.module.css';

type Props = {
    media: Media;
}

export default function MediaCard({media} : Props){
    return(
        <Link to={`/media/${media.type}/${media.id}`} className={styles.cardLink}>
            <div className={styles.card}>
                <div className={styles.posterWrapper}>
                    <img
                        src={media.posterUrl}
                        alt={media.title}
                        className={styles.poster}
                    />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>{media.title}</h2>
                    <p className={styles.date}>{media.releaseYear}</p>
                </div>
            </div>
        </Link>
    );
}