import styles from './Register.module.css';
export default function Register(){
    return(
        <form>
            <div className={styles.container}>
                <p>Register</p>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" className={styles.input}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className={styles.input}/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" className={styles.input}/>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" className={styles.input}/>

                <button type="submit" className={styles.button}>Register</button>
            </div>
            
        </form>
    );
}