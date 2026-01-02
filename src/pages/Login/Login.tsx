import styles from './Login.module.css';
import formStyles from '../../styles/form.module.css';
export default function Login(){
    return(
        <form className={formStyles.form}>
            <div className={formStyles.container}>
                <p className={formStyles.formText}>Login</p>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" className={formStyles.input}/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" className={formStyles.input}/>

                <div className={styles.remembermeContainer}>
                    <input type="checkbox" id="rememberme" name="rememberme" className={styles.checkbox}/>
                    <label htmlFor="rememberme">Remember me</label>
                </div>

                <button type="submit" className={formStyles.button}>Login</button>
            </div>
        </form>
    );
}