type FilterPanelProp = {
    category ?: {value: string, label:string}[];
    onCategoryChange ?: (category: string) => void;

    genres ?: string[];
    onGenreChange ?: (selectedGenres: string[]) => void;

    onReleaseFromChange ?: (value: string) => void;
    onReleaseToChange ?: (value: string) => void;

    onMinRatingChange ?: (value: number | undefined) => void;
    
    onSearchClick ?: () => void;
}

import { useState } from 'react';
import styles from './FilterPanel.module.css';

export default function FilterPanel({
    category, onCategoryChange,
    genres, onGenreChange,
    onReleaseFromChange, onReleaseToChange,
    onMinRatingChange,
    onSearchClick
    }: FilterPanelProp){

        const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

        function toggleGenre(genre: string){
            let newGenres : string[];

            if(selectedGenres.includes(genre)){
                newGenres = selectedGenres.filter(g => g!== genre);
            }else{
                newGenres = [...selectedGenres, genre];
            }

            setSelectedGenres(newGenres);
            onGenreChange?.(newGenres);

        }

    return(
        <div className={styles.filterContainer}>
            <p>Filters</p>
        
            {/* CATEGORY */}
            {category && category.length > 0 && (
               <div className={styles.categorySection}>

                <p className={styles.sectionHeader}>Show Me</p>

                <div className={styles.radioGroup}>
        
                {category.map(cat => (
                    <div key={cat.value} className={styles.radioOption}>
                    <input type="radio" name="category" id={cat.value} value={cat.value} defaultChecked={cat.value === 'all'} onChange={() => onCategoryChange && onCategoryChange(cat.value)} />
                    <label htmlFor={cat.value}>{cat.label}</label>
                </div>
            ))}
        </div>
    </div>
    )}

    {/* GENRE */}
    {genres && (
        <div className={styles.genreField}>
            <label>Genre</label>

            {genres.map((genre) => (
                <div key={genre}>
                    <input
                        type="checkbox"
                        id={genre}
                        checked={selectedGenres.includes(genre)}
                        onChange={() => {
                    
                    let updatedGenres;

                    if (selectedGenres.includes(genre)) {
                      updatedGenres = selectedGenres.filter(g => g !== genre);
                    } else {
                      updatedGenres = [...selectedGenres, genre];
                    }

                    setSelectedGenres(updatedGenres);
                    onGenreChange?.(updatedGenres);
                }}
                />
        <label htmlFor={genre}>{genre}</label>
      </div>
    ))}
  </div>
)}


    {/* RELEASE YEAR */}
    <div className={styles.releaseYearField}>
        <label htmlFor="releaseYear">Release Year</label>
        <label htmlFor="from">From</label>
        <input 
            type="date" 
            name='from'
            onChange={(e) => onReleaseFromChange?.(e.target.value)} 
            />

        <label htmlFor="to">To</label>
        <input 
            type="date" 
            name='to'
            onChange={(e) => onReleaseToChange?.(e.target.value)}
            />
    </div>

    {/* RATING */}
    <div className={styles.ratingSection}>
        <p className={styles.sectionHeader}>Minimum Rating</p>
        <div className={styles.ratingGroup}>
            <div className={styles.radioOption}>
                <input 
                    type="radio" 
                    name='rating' 
                    id='rall' 
                    defaultChecked 
                    onChange={() => onMinRatingChange?.(undefined)}
                    />
                <label htmlFor="rall">Any Rating</label>
            </div>

            <div className={styles.radioOption}>
                <input type="radio" name='rating' id='r7'
                    onChange={() => onMinRatingChange?.(7)}
                />
                <label htmlFor="r7">7+ Stars</label>
            </div>

            <div className={styles.radioOption}>
                <input type="radio" name='rating' id='r8' 
                    onChange={() => onMinRatingChange?.(8)}
                />
                <label htmlFor="r8">8+ Stars</label>
            </div>

            <div className={styles.radioOption}>
                <input type="radio" name='rating' id='r9' 
                    onChange={() => onMinRatingChange?.(9)}
                />
                <label htmlFor="r9">9+ Stars</label>
            </div>

        </div>
    </div>
    
    <div className={styles.buttonSection}>
        <button className={styles.searchButton}
            type='button'
            onClick={onSearchClick}>Search
        </button>
    </div>
</div>
    );
}