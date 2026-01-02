import {Link} from 'react-router-dom';
import styles from './Header.module.css';
import SearchBar from '../SearchBar/SearchBar';
export default function Header(){
    return(
        <>
            <header className={styles.header}>
                <nav>
                    
                    <ul>
                        <div>
                        <Link to = "/" className={styles.logo}>MovieHub</Link>
                        </div>
                        
                        <SearchBar />

                        <div className={styles.navList}>
                            <li><Link to = "/" className={styles.navLinks}>Home</Link></li> 
                            <li><Link to = "/movies" className={styles.navLinks}>Movies</Link></li> 
                            <li><Link to = "/tvshows" className={styles.navLinks}>Tv Shows</Link></li> 
                            <li><Link to = "/watchlist" className={styles.navLinks}>Watchlist</Link></li>
                            <li><Link to = "/login" className={styles.navLinks}>Login</Link></li>
                            <li><Link to= "/register" className={styles.navLinkRegister}>Register</Link></li>
                        </div>
                    </ul>
                </nav>
            </header> 
        </>
    );
}