import React from 'react';
import '../css/Login.css';
import { signInWithGoogle, signOutFromGoogle } from '../firebaseconfig.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = React.useState(null);
    const navigate = useNavigate();

    const handleLogin = () => {
        signInWithGoogle().then((user) => {
            // console.log(user);
            setUser(user);
            // console.log(user);
            const person={displayName:user.displayName,email:user.email,photoURL:user.photoURL};
            navigate('/',{state:{user:person}});
        }).catch((error) => {
            console.log(error);
        });
    }

  return (
    <div className="container">
        <h1>Login</h1>

        <input type="text" placeholder="Email Address"/>
        <input type="password" placeholder="Password" />
        <div>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button>Log in</button>
        <p>or</p>
        <button onClick={handleLogin}>Continue with Google</button>
        
        <p>Dont have an account? <a href="/signup">Sign up</a></p>

        <p className="developer">Developer Name</p>
    </div>
  )
}

export default Login;