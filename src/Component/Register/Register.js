import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Register = () => {
    const { setName,setEmail,setPassword,createNewUser } = useAuth();
    const handleName = e => {
        setName(e.target.value )
    }
    const handleEmail = e => {
        setEmail(e.target.value )
    }
    const handlePassword = e => {
        setPassword(e.target.value )
    }
    return (
        <div className="login-form">
            <div>
                <h2>Register</h2>
                <form onSubmit={createNewUser}>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input onBlur={handleName} type="text" name="name" id="name" />
                    <br />
                    <label htmlFor="email">Email</label><br />
                    <input onBlur={handleEmail} type="email" name="email" id="email" />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input onBlur={handlePassword} type="password" name="password" id="password" />
                    <br />
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <br />
                    <input type="password" name="password" id="confirmpassword" />
                    <br />
                    <br />
                    <input className="btn-regular" type="submit" value="Register" />
                </form>
                <p>................................................</p>
                <p>Already have an Account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;