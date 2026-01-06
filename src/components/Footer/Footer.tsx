import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from './Footer.module.css';
export default function Footer(){
    return(
        <>
            <footer className={styles.footer}>

                <div className={styles.brand}>
                    <Link to = "/" className={styles.logo}>MovieHub</Link>
                    <p className={styles.tagLine}>Discover, Watch, Enjoy</p>
                </div>

                <div className={styles.quickLinks}>
                    <p className={styles.linkText}>QUICK LINKS</p>
                    <ul>
                        <li><Link to = "/" className={styles.quickLink}>Home</Link></li> 
                        <li><Link to = "/movies" className={styles.quickLink}>Movies</Link></li> 
                        <li><Link to = "/tvshows" className={styles.quickLink}>Tv Shows</Link></li> 
                        <li><Link to = "/watchlist" className={styles.quickLink}>Watchlist</Link></li>
                    </ul>
                </div>

                <div className={styles.socialLinks}>
                    <p className={styles.linkText}>SOCIAL LINKS</p>
                    <ul>
                        <li><FaFacebook className={styles.socialLink} /></li>
                        <li><FaInstagram className={styles.socialLink} /></li>
                        <li><FaTwitter className={styles.socialLink}/></li>
                    </ul>
                </div>



            </footer>
        </>
    );
}