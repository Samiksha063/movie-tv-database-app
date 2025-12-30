import styles from './SearchBar.module.css';
export default function SearchBar(){
    return(
        <>
            <input type="search" placeholder="Search movies, tv shows, persons...." className={styles.SearchBar}/>
        </>
    );
}