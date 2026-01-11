import { Outlet, Link } from 'react-router-dom';
import styles from './AuthLayout.module.css';
export default function AuthLayout(){
    return(
        <>
            <div className={styles.authPage}>

                <div className={styles.overlay}></div>

                <Link to="/" className={styles.logo}>MovieHub</Link>

                <div className={styles.formWrapper}>
                    <Outlet /> 
                </div>
            </div>
        </>
    );
}