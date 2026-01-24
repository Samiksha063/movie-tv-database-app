import { useEffect, useState } from "react";
import type { Movie } from "../../types/movies";
import { getAllMovies } from "../../dao/movies.dao";
import { seedMoviesDB } from "../../services/movies.service";
import { filterItems, type FilterState } from "../../utils/filter/commonFilter";

import MovieCard from '../../components/MovieCard/MovieCard';
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import styles from './Movies.module.css';

const allGenres = ["Action","Drama","Comedy","Thriller","Romance","Adventure","Crime","Fantasy","Science Fiction"];

export default function Movies(){

  const [movies, setMovies] = useState<Movie[]>([]);

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
      await seedMoviesDB();
      const allMovies = await getAllMovies();
      setMovies(allMovies);
    }
      init();
  },[]);

  const moviesToShow = filterItems(movies, appliedFilters);

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

            {moviesToShow.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}

          </div>
      </main>
    </div>
  );
}