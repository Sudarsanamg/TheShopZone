import React from 'react';
import '../css/Login.css';
import { signInWithGoogle, signOutFromGoogle } from '../firebaseconfig.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {

    const [user, setUser] = React.useState(null);
    const [email,setEmail]=React.useState('')
    const [password,setPassword]=React.useState('')
    const navigate = useNavigate();

    const handleLoginGoogle =async () => {
        signInWithGoogle().then(async(user) => {
            // console.log(user);
            setUser(user);
            // console.log(user);
            const person={displayName:user.displayName,email:user.email,photoURL:user.photoURL};
            let isPersonAvailable=await axios.post('http://localhost:3000/accounts/isPersonAvailable',{
              email:person.email
            })
            // console.log(isPersonAvailable.data);
            if(isPersonAvailable.data){
              
            navigate('/home',{state:{user:person}});
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    const handlelogin =async()=>{
      await axios.post('http://localhost:3000/accounts/loginSeller',{
        email:email,
        password:password
      }).then((res)=>{
        console.log(res)
        let seller=res.data.seller;
        const person={displayName:seller.name,email:seller.email,photoURL:seller.photoURL? user.photoURL:""};
        // console.log(person)
        console.log(res)
        const accessToken=res.data.accessToken;
        const refreshToken=res.data.refreshToken;
        localStorage.setItem('accessToken',accessToken)
        localStorage.setItem('refreshToken',refreshToken)
        navigate('/home',{state:{user:person}});
      }).catch((error)=>{
        alert(error)
      })
    }

  return (
    <div className="container">
      <h1></h1>
        <h1>Seller Login</h1>

        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address"/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        <div>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button onClick={handlelogin}>Log in</button>
        <p>or</p>
        <button onClick={handleLoginGoogle}>Continue with Google</button>
        
        <p>Dont have an account? <a href="/signup">Sign up</a></p>

        <p className="developer">Developer Name</p>
    </div>
  )
}

export default Login;
