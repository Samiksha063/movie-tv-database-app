import formStyles from '../../styles/form.module.css';
import styles from '../Register/Register.module.css';
import { useAuthStore } from '../../store/authStore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Register(){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const register = useAuthStore((state) => state.register);

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!username || !email || !password || !confirmPassword){
            alert("All fields are required to be filled");
        }

        if(password != confirmPassword){
            alert("Password doesnot match");
            return;
        }

        const success = register(username, email, password);

        if(!success){
            alert("Email already exists. Try Logging in");
            return;
        }else{
            alert("Registration Successful!");
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

            navigate("/login");
        }
    }

    return(
        <form className={formStyles.form} onSubmit={handleSubmit}>
            <div className={formStyles.container}>
                <p className={formStyles.formText}>Register</p>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" className={formStyles.input} value={username} onChange={(e) => setUsername(e.target.value)}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className={formStyles.input} value={email} onChange={(e)=> setEmail(e.target.value)}/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" className={formStyles.input} value={password} onChange={(e)=> setPassword(e.target.value)}/>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" className={formStyles.input} value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>

                <p className={formStyles.loginState}>Already have an account? <Link to="/login" className={styles.loginLink}>Login</Link></p>

                <button type="submit" className={formStyles.button}>Register</button>
            </div>
            
        </form>
    );
}