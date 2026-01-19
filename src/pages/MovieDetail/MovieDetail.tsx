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

return (
  <div className={styles.container}>
    
    {/*HERO SECTION*/}
    <div className={styles.heroSection} style={{ backgroundImage: `url(${movie.backdropUrl})` }}>
      <div className={styles.darkOverlay}>
        <div className={styles.heroWrapper}>
          <img src={movie.posterUrl} className={styles.mainPoster} alt="poster" />
          
          <div className={styles.mainText}>
            <h1 className={styles.movieTitle}>
              {movie.title} <span className={styles.year}>({movie.releaseYear})</span>
            </h1>
            
            <div className={styles.statsBar}>
              <span className={styles.ratingBadge}>{movie.rating.ageRating}</span>
              <span>{movie.genres.join(", ")}</span>
              <span className={styles.dot}>•</span>
              <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
            </div>
            
            <div className={styles.scoreSection}>
              <button className={styles.watchlistBtn}>+ Add to Watchlist</button>
            </div>

            <p className={styles.tagline}>{movie.tagline}</p>

            <h3 className={styles.sectionTitle}>Overview</h3>
            <p className={styles.overviewText}>{movie.description}</p>
            
            <div className={styles.directorBox}>
              <strong>{movie.director.name}</strong>
              <p>Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*CONTENT AREA */}
    <div className={styles.detailsArea}>
      <div className={styles.mainContent}>
        <h2>Top Cast</h2>
        <div className={styles.castRow}>
          {movie.cast.map((person) => (
            <div className={styles.castCard} key={person.name}>
              <div className={styles.castImagePlaceholder}></div>
              <div className={styles.castInfo}>
                <p className={styles.realName}>{person.name}</p>
                <p className={styles.charName}>{person.character}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className={styles.subHeading}>Trailer</h2>
        <div className={styles.videoBox}>
          <iframe 
            src={`https://www.youtube.com/embed/${movie.trailer.split("v=")[1]}`}
            title="movie trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/*DISCUSSIONS */}
        <div className={styles.discussionSection}>
          <h2 className={styles.subHeading}>Discussions</h2>
          
          <div className={styles.commentInputBox}>
            <textarea placeholder="Start a discussion..." className={styles.textArea}></textarea>
            <button className={styles.postBtn}>Post Comment</button>
          </div>

          <div className={styles.commentList}>
            <div className={styles.comment}>
              <div className={styles.userAvatar}>JD</div>
              <div className={styles.commentBody}>
                <div className={styles.commentHeader}>
                  <strong>John Doe</strong> <span>Jan 15, 2026</span>
                </div>
                <p>The cinematography in the forest scenes was absolutely breathtaking.</p>
                <button className={styles.replyLink}>Reply</button>
              </div>
            </div>

            <div className={`${styles.comment} ${styles.reply}`}>
              <div className={styles.userAvatar} style={{backgroundColor: '#e91e63'}}>AS</div>
              <div className={styles.commentBody}>
                <div className={styles.commentHeader}>
                  <strong>Alice Smith</strong> <span>Jan 16, 2026</span>
                </div>
                <p>Agreed! James Cameron really pushed the boundaries again.</p>
                <button className={styles.replyLink}>Reply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}