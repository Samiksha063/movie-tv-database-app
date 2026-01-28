import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getMovieById } from "../../dao/movies.dao";
import { getTvShowsById } from "../../dao/tvshows.dao";

import type { Media } from "../../types/media";

import styles from './MediaDetail.module.css';

export default function MediaDetail(){
    const {type , id} = useParams<{type: "movie" | "tvShow"; id: string}>();
    const [media, setMedia] = useState<Media | null>(null);

  useEffect(() => {
  async function loadMedia() {
    if (!id) return;

    if (type === "movie") {
      const movie = await getMovieById(Number(id));
      if (!movie) {
        setMedia(null);
        return;
      }

      setMedia({
        id: Number(movie.id),
        title: movie.title,
        posterUrl: movie.posterUrl,
        releaseYear: movie.releaseYear,
        type: "movie",

        releaseDate: movie.releaseDate ?? `${movie.releaseYear}-01-01`,
        genres: movie.genres ?? [],
        rating: movie.rating ?? { average: 0, voteCount: 0, ageRating: "" },

        backdropUrl: movie.backdropUrl,
        tagline: movie.tagline,
        description: movie.description,
        runtime: movie.runtime,
        director: movie.director,
        cast: movie.cast,
        trailer: movie.trailer,
        gallery: movie.gallery,
        popularity: movie.popularity,
        category: movie.category,
      });
    }

    if (type === "tvShow") {
      const tvShow = await getTvShowsById(Number(id));
      if (!tvShow) {
        setMedia(null);
        return;
      }

      setMedia({
        id: Number(tvShow.id),
        title: tvShow.title,
        posterUrl: tvShow.posterUrl,
        releaseYear: tvShow.releaseYear,
        type: "tvShow",

        releaseDate: tvShow.releaseDate ?? `${tvShow.releaseYear}-01-01`,
        genres: tvShow.genres ?? [],
        rating: tvShow.rating ?? { average: 0, voteCount: 0, ageRating: "" },

        backdropUrl: tvShow.backdropUrl,
        tagline: tvShow.tagline,
        description: tvShow.description,
        runtime: tvShow.runtime,
        director: tvShow.director,
        cast: tvShow.cast,
        trailer: tvShow.trailer,
        gallery: tvShow.gallery,
        popularity: tvShow.popularity,
        category: tvShow.category,
      });
    }
  }

  loadMedia();
}, [type, id]);


    if(!media){
        return <p> Media details not found</p>
    }

    const trailerId = media.trailer?.includes("v=")? media.trailer.split("v=")[1] : media.trailer;

return (
  <div className={styles.container}>
    
    {/*HERO SECTION*/}
    <div className={styles.heroSection} style={{ backgroundImage: `url(${media.backdropUrl})` }}>
      <div className={styles.darkOverlay}>
        <div className={styles.heroWrapper}>
          <img src={media.posterUrl} className={styles.mainPoster} alt="poster" />
          
          <div className={styles.mainText}>
            <h1 className={styles.movieTitle}>
              {media.title} <span className={styles.year}>({media.releaseYear})</span>
            </h1>
            
            <div className={styles.statsBar}>
              <span className={styles.ratingBadge}>{media.rating.ageRating}</span>
              <span>{media.genres.join(", ")}</span>
              <span className={styles.dot}>•</span>
              <span>{media.runtime ? `${Math.floor(media.runtime / 60)}h ${media.runtime % 60}m` : "N/A"}</span>
            </div>
            
            <div className={styles.scoreSection}>
              <button className={styles.watchlistBtn}>+ Add to Watchlist</button>
            </div>

            <p className={styles.tagline}>{media.tagline}</p>

            <h3 className={styles.sectionTitle}>Overview</h3>
            <p className={styles.overviewText}>{media.description}</p>
            
            <div className={styles.directorBox}>
              <strong>{media.director?.name??"Unknown"}</strong>
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
          {(media.cast ?? []).map((person) => (
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
          

          {trailerId ? (
              <iframe
                src={`https://www.youtube.com/embed/${trailerId}`}
                title="trailer"
                frameBorder="0"
                allowFullScreen
              />
) : (
  <p>No trailer available.</p>
)}

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