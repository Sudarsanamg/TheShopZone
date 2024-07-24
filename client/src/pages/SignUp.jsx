import React from 'react';
import '../css/SignUp.css';
import { signInWithGoogle, signOutFromGoogle } from '../firebaseconfig.js';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {


    const navigate = useNavigate();

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const handleSignUpWithGoogle = () => {
        signInWithGoogle().then((user) => {
            
            const person={displayName:user.displayName,email:user.email,photoURL:user.photoURL};
            navigate('/home',{state:{user:person}});

        }).catch((error) => {
            console.log(error);
        }
        );
    }

    const handleSignUp=()=>{
      if(password!=confirmPassword){
        alert('Password does not match')
      }
      else{
      const data={
        name:name,
        email:email,
        password:password,
      }
      console.log(data);
      }
    }

  return (
    <div className="container">
        <h1>Sign Up</h1>
      <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your Name" />
      <input type="text"value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email Address *" />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}placeholder="Password" />
      <input type="password"value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
      <button onClick={handleSignUp}>Sign Up</button>
      <label>Already have an account?</label>
      <a href="/">Login</a>
      <p>or</p>
        <button onClick={handleSignUpWithGoogle}>Continue with Google</button>
    </div>
  );
};

export default SignUp;
