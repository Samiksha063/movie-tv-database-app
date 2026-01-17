import styles from './FilterPanel.module.css';
export default function FilterPanel(){
    return(
        <div className={styles.filterContainer}>
            <p>Filters</p>

            <div className={styles.categorySection}>


    <p className={styles.sectionHeader}>Show Me</p>

    <div className={styles.radioGroup}>
        <div className={styles.radioOption}>
            <input type="radio" name='category' id='all' defaultChecked />
            <label htmlFor="all">Everything</label>
        </div>

        <div className={styles.radioOption}>
            <input type="radio" name='category' id='popular' />
            <label htmlFor="popular">Popular</label>
        </div>

        <div className={styles.radioOption}>
            <input type="radio" name='category' id='nowPlaying' />
            <label htmlFor="nowPlaying">Now Playing</label>
        </div>

        <div className={styles.radioOption}>
            <input type="radio" name='category' id='upcoming' />
            <label htmlFor="upcoming">Upcoming</label>
        </div>
    </div>
</div>

            <div className={styles.genreField}>
                <label htmlFor="genre">Genre</label>

                <div>
                    <input type="checkbox" name='genre' id='action' />
                    <label htmlFor="action">Action</label>
                </div>

                <div>
                    <input type="checkbox" name='genre' id='drama' />
                    <label htmlFor="drama">Drama</label>
                </div>

                <div>
                    <input type="checkbox" name='genre' id='comedy' />
                    <label htmlFor="comedy">Comedy</label>
                </div>

                <div>
                    <input type="checkbox" name='genre' id='thriller' />
                    <label htmlFor="thriller">Thriller</label>
                </div>

                <div>
                    <input type="checkbox" name='genre' id='romance' />
                    <label htmlFor="romance">Romance</label>
                </div>

                <div>
                    <input type="checkbox" name='genre' id='adventure' />
                    <label htmlFor="adventure">Adventure</label>
                </div>

                <div>
                    <input type="checkbox" name='genre' id='crime' />
                    <label htmlFor="crime">Crime</label>
                </div>

                <div>
                    <input type="checkbox" name='genre' id='fantasy' />
                    <label htmlFor="fantasy">Fantasy</label>
                </div>
                

            </div>

            <div className={styles.releaseYearField}>
                <label htmlFor="releaseYear">Release Year</label>

                <label htmlFor="from">From</label>
                <input type="date" name='from' />

                <label htmlFor="to">To</label>
                <input type="date" name='to'/>
            </div>

            <div className={styles.ratingSection}>
                <p className={styles.sectionHeader}>Minimum Rating</p>

                <div className={styles.ratingGroup}>
                    <div className={styles.radioOption}>
                        <input type="radio" name='rating' id='rall' defaultChecked />
                        <label htmlFor="rall">Any Rating</label>
                    </div>

                    <div className={styles.radioOption}>
                        <input type="radio" name='rating' id='r7' />
                        <label htmlFor="r7">7+ Stars</label>
                    </div>

                    <div className={styles.radioOption}>
                        <input type="radio" name='rating' id='r8' />
                        <label htmlFor="r8">8+ Stars</label>
                    </div>

                    <div className={styles.radioOption}>
                        <input type="radio" name='rating' id='r9' />
                        <label htmlFor="r9">9+ Stars</label>
                    </div>
                </div>
            </div>

            <div className={styles.buttonSection}>
                <button className={styles.searchButton}>
                    Search
                </button>
            </div>

        </div>

    );
}