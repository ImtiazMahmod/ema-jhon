import { signInWithEmailLink } from '@firebase/auth';
import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const { setEmail, setPassword, signInUsingEmail, signInUsingGoogle } = useAuth();
    ///redirect to initiale page after login
    const location = useLocation()
    // console.log(location.state.from)
    const redirect_uri = location.state?.from || '/shop';
    const history = useHistory()
    
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            
            history.push(redirect_uri)
            
        })
       
    }
    const handleEmail = e => {
        setEmail(e.target.value )
    }
    const handlePassword = e => {
        setPassword(e.target.value )
    }
    return (
        <div  className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit={signInUsingEmail}>
                    <label htmlFor="email">Email</label><br />
                    <input onBlur={handleEmail} type="email" name="email" id="email" placeholder="enter your email" /><br />
                    
                    <label htmlFor="password">password</label><br />
                    <input onBlur={handlePassword} type="password" name="password" id="password" />
                    <br />
                    <br />                    
                   <input className="btn-regular" type="submit" value="Login" />
                </form>
                    <p>................Or................</p>
                    <button onClick={handleGoogleSignIn} className="btn-regular">Google Login</button>
                    <p>...........New to Ema-jhon?..........</p>
                    <Link to="/register">Create new Account</Link>
            </div>
        </div>
    );
};

export default Login;