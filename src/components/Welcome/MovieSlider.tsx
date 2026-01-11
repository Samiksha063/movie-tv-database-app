import { useState, useEffect } from 'react';
import styles from './Welcome.module.css';
import {slides} from './MovieSlider';
export default function Welcome(){

    const[currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            
            setCurrentIndex(prevIndex=> (prevIndex + 1) % slides.length);
        },3000);

        return ()=> clearInterval(interval);
    },[]);

    return(
        <>
        <div className={styles.welcomeContainer} style={{backgroundImage: `url(${slides[currentIndex]})`}}>
                <div className={styles.welcomeText}>
                    <p className={styles.welcome}>Welcome</p>
                    <p className={styles.tagline}>Explore movies and TV shows</p>
                </div>
                
            </div>
        </>
    );
}