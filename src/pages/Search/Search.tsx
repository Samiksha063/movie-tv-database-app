import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import type { Media } from "../../types/media";

import { getAllMovies } from "../../dao/movies.dao";
import { getAllTvShows } from "../../dao/tvshows.dao";
import { searchMedia } from "../../utils/filter/searchFilter";

import MediaCard from "../../components/MediaCard/MediaCard";
import styles from './Search.module.css';

export default function Search() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";

    const [allMedia, setAllMedia] = useState<Media[]>([]);

    useEffect(()=>{
        async function loadMedia(){
            const allMovies = await getAllMovies();
            const allTvShows = await getAllTvShows();
            
            const moviesAsMedia: Media[] = allMovies.map(movie => ({...movie,type: "movie"}));

            const tvShowsAsMedia: Media[] = allTvShows.map(tv => ({...tv,type: "tvShow"}));

            setAllMedia([...moviesAsMedia, ...tvShowsAsMedia]);
        }
        loadMedia();
    },[]);

    const results = query ? searchMedia(allMedia,query) : allMedia ;

    return (
        <div className={styles.searchPage}>
            <h2>Search Results</h2>
            <p>Searching for: <strong>{query}</strong></p>

            {results.length > 0 ? (
                <div className={styles.grid}>
                {results.map((media) => (
                    <MediaCard key={media.id} media={media} />
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
