import { useEffect, useState } from "react";
import type { TvShow } from "../../types/tvshows";
import { getAllTvShows } from "../../dao/tvshows.dao";
import { seedTvShowsDB } from "../../services/tvshows.services";
import { filterItems, type FilterState } from "../../utils/filter/commonFilter";

import TvShowCard from '../../components/TvShowCard/TvShowCard';
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import styles from '../Movies/Movies.module.css';

const allGenres = ["Action","Drama","Comedy","Thriller","Romance","Adventure","Crime","Fantasy","Science Fiction"];

export default function Movies(){

  const [tvShows, setTvShows] = useState<TvShow[]>([]);

  const [filters, setFilters] = useState<FilterState>({
    category : "all",
    genres: [],
    releaseFrom: "",
    releaseTo: "",
    minRating: undefined
  });

  const [appliedFilters, setAppliedFilters] = useState<FilterState>({
    category: "all",
    genres: [],
    releaseFrom: "",
    releaseTo: "",
    minRating: undefined
  });

  function handleSearch(){
    setAppliedFilters(filters);
  }

  useEffect(()=>{
    async function init(){
      await seedTvShowsDB();
      const allMovies = await getAllTvShows();
      setTvShows(allMovies);
    }
      init();
  },[]);

  const tvShowsToShow = filterItems(tvShows, appliedFilters);

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

            {tvShowsToShow.map((tvShow) => (
              <TvShowCard key={tvShow.id} tvShow={tvShow} />
            ))}

          </div>
      </main>
    </div>
  );
}