type FilterPanelProp = {
    category ?: {value: string, label:string}[];
    selectedCategory ?: string;
    onCategoryChange ?: (category: string) => void;

    genres ?: string[];
    selectedGenres ?: string[];
    onGenreChange ?: (selectedGenres: string[]) => void;

    onReleaseFromChange ?: (value: string) => void;
    onReleaseToChange ?: (value: string) => void;

    selectedRating :number | undefined
    onMinRatingChange ?: (value: number | undefined) => void;
    
    onSearchClick ?: () => void;
}

import styles from './FilterPanel.module.css';

export default function FilterPanel({
    category, selectedCategory, onCategoryChange,
    genres, selectedGenres=[], onGenreChange,
    onReleaseFromChange, onReleaseToChange,
    selectedRating, onMinRatingChange,
    onSearchClick
    }: FilterPanelProp){

        // const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

        function toggleGenre(genre: string){
            let newGenres : string[];

            if(selectedGenres.includes(genre)){
                newGenres = selectedGenres.filter(g => g!== genre);
            }else{
                newGenres = [...selectedGenres, genre];
            }

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
                    <input type="radio" name="category" id={cat.value} value={cat.value} checked = {selectedCategory === cat.value}  onChange={() => onCategoryChange && onCategoryChange(cat.value)} />
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
            {[undefined, 7, 8, 9].map(r => (
            <div key={r ?? 'any'} className={styles.radioOption}>
              <input
                type="radio"
                name="rating"
                id={r !== undefined ? `r${r}` : 'rall'}
                checked={selectedRating === r}
                onChange={() => onMinRatingChange?.(r)}
              />
              <label htmlFor={r !== undefined ? `r${r}` : 'rall'}>{r ? `${r}+ Stars` : 'Any Rating'}</label>

            </div>
          ))}


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