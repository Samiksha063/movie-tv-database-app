import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './SearchBar.module.css';

type SearchBarProps = {
    onSearch: (query: string) => void;
}
export default function SearchBar({onSearch} : SearchBarProps){
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        if(query.trim() !== ""){
            navigate(`/search?q=${encodeURIComponent(query.trim())}`);
        }

    }
    return(
        <>
        <form onSubmit={handleSubmit} >
            <input 
                type="search" 
                placeholder="Search movies, tv shows, persons...." 
                className={styles.SearchBar}
                value={query}
                onChange={(e) => setQuery(e.target.value) }
            />
        </form>
        </>
    );
}