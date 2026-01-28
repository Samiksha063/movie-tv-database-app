import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { Media} from "../../types/media";

import { getAllMovies } from "../../dao/movies.dao";
import { seedMoviesDB } from "../../services/movies.service";

import { getAllTvShows } from "../../dao/tvshows.dao";
import { seedTvShowsDB } from "../../services/tvshows.services";

import { filterItems, type FilterState } from "../../utils/filter/commonFilter";

import MediaCard from "../../components/MediaCard/MediaCard";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import styles from './Media.module.css';

const allGenres = ["Action","Drama","Comedy","Thriller","Romance","Adventure","Crime","Fantasy","Science Fiction"];

const DEFAULT_FILTERS: FilterState = {
  category: "all",
  genres: [],
  releaseFrom: "",
  releaseTo: "",
  minRating: undefined,
};

export default function Media(){
  const {type} = useParams<{type: "movie" | "tvShow"}>()

  const [mediaList, setMediaList] = useState<Media[]>([]);

  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const [appliedFilters, setAppliedFilters] = useState<FilterState>(DEFAULT_FILTERS);

  function handleSearch(){
    setAppliedFilters(filters);
  }

  useEffect(()=>{
    setFilters(DEFAULT_FILTERS);
    setAppliedFilters(DEFAULT_FILTERS);
  },[type]);

  useEffect(()=>{
    async function init(){
        let items : Media[] = [];

        if(type === "movie"){
            await seedMoviesDB();
            const movies = await getAllMovies();

            items = movies.map(m => ({
                id: Number(m.id),
                title: m.title,
                posterUrl: m.posterUrl,
                releaseYear: m.releaseYear,
                type: "movie",
                genres: m.genres || [],
                releaseDate: m.releaseDate || `${m.releaseYear}-01-01`,
                rating: m.rating || { average: 0, voteCount: 0, ageRating: "" }
      }));
  
        }else if(type === "tvShow"){
            await seedTvShowsDB();
            const tvShows = await getAllTvShows();

            items = tvShows.map(tv => ({
                id: Number(tv.id),
                title: tv.title,
                posterUrl: tv.posterUrl,
                releaseYear: tv.releaseYear,
                type: "tvShow",
                genres: tv.genres || [],
                releaseDate: tv.releaseDate || `${tv.releaseYear}-01-01`,
                rating: tv.rating || { average: 0, voteCount: 0, ageRating: "" }
      }));
    }

    setMediaList(items);
      
    }
      init();
  },[type]);

  const mediaToShow = filterItems(mediaList, appliedFilters);

  return (
    <div className={styles.mainContainer}>

      <aside className={styles.filterPanel}>
        <FilterPanel
        // category
          category={[
            {value: 'all', label: 'Everything'},
            {value: 'popular', label: 'Popular'},
            {value: 'nowPlaying', label: 'Now Playing'},
            {value: 'upcoming', label: 'Upcoming'},
          ]}
            onCategoryChange={(category) =>
              setFilters(prev => ({...prev, category}))
            }

            // genres
            genres={allGenres}
            onGenreChange={(genres) => 
              setFilters(prev => ({...prev, genres}))
            }

            //release year
            onReleaseFromChange={(value) => 
              setFilters(prev => ({...prev, releaseFrom: value}))
            }

            onReleaseToChange={(value) => 
              setFilters(prev => ({...prev, releaseTo: value}))
            }

            //rating
            onMinRatingChange={(value)=> 
              setFilters(prev => ({...prev, minRating: value}))}

            //Search
            onSearchClick={handleSearch}
          />
        </aside>

      <main className={styles.moviesContent}>
          
          <div className={styles.grid}>

            {mediaToShow.map((media) => (
              <MediaCard key={media.id} media={media} />
            ))}

          </div>
      </main>
    </div>
  );
}