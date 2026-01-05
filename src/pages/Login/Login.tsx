import styles from './Login.module.css';
import formStyles from '../../styles/form.module.css';
import { useAuthStore } from '../../store/authStore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login(){
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");
    const[rememberMe, setRememberMe] = useState(false);

    const login = useAuthStore((state) => state.login );

    const navigate = useNavigate();

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(email,password);

        if (!email || !password) {
        setError("All fields are required to be filled");
        return;
        }

        const result = login(email,password, rememberMe);

        if(result === "not-registered"){
            setError("User doesnot exist. Register now");
            return;
        }

        if (result === "wrong-password") {
            setError("Incorrect password");
            return;
        }
        
            alert("Login Successfull");
            setEmail("");
            setPassword("");
            setError("");

            navigate("/");
    }

    

    return(
        <form className={formStyles.form} onSubmit={handleSubmit}>
            <div className={formStyles.container}>
                <p className={formStyles.formText}>Login</p>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className={formStyles.input} value={email} onChange={(e)=>{setEmail(e.target.value);}}/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" className={formStyles.input} value={password} onChange={(e)=>{setPassword(e.target.value);}}/>

                <div className={styles.remembermeContainer}>
                    <input type="checkbox" id="rememberme" name="rememberme" className={styles.checkbox} checked={rememberMe} onChange={(e)=>setRememberMe(e.target.checked)}/>
                    <label htmlFor="rememberme">Remember me</label>
                </div>

                <p className={formStyles.loginState}>Don't have an account? <Link to="/register" className={styles.registerLink}>Register</Link></p>

                <p className={formStyles.error}>{error}</p>

                <button type="submit" className={formStyles.button}>Login</button>
            </div>
        </form>
    );
}