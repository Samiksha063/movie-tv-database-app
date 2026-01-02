import formStyles from '../../styles/form.module.css';
export default function Register(){
    return(
        <form className={formStyles.form}>
            <div className={formStyles.container}>
                <p className={formStyles.formText}>Register</p>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" className={formStyles.input}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className={formStyles.input}/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" className={formStyles.input}/>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" className={formStyles.input}/>

                <button type="submit" className={formStyles.button}>Register</button>
            </div>
            
        </form>
    );
}