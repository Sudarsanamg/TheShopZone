import React from 'react';
import '../css/Login.css';
import { signInWithGoogle, signOutFromGoogle } from '../firebaseconfig.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
const main_server_URL = import.meta.env.VITE_API_MAIN_SERVER_URL;



const Login = () => {

   localStorage.removeItem('accessToken')
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
           
            const response=await axios.post(`${main_server_URL}/accounts/loginSellervOAuth`,{
              email:person.email
            })


            console.log(response)
            localStorage.removeItem('accessToken');

            localStorage.setItem('accessToken',response.data.accessToken);
            localStorage.setItem('refreshToken',response.data.refreshToken);


              
            navigate('/home',{state:{user:person}});
            
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
    <div className="Login_container">
  <h1 className="login_head">SELLER LOGIN</h1>

  <input 
   className="input-field"
    type="text" 
    value={email} 
    onChange={(e) => setEmail(e.target.value)} 
    placeholder="Email Address"
  />
  <input 
  className="input-field"
    type="password" 
    value={password}
    onChange={(e) => setPassword(e.target.value)} 
    placeholder="Password" 
  />

  <button className="btn-login" onClick={handlelogin}>Login</button>

  <p className="other">Login with</p>

  <div className="Other-login">
  <button className="btn-google-icon" onClick={handleLoginGoogle}>
    <i className="fab fa-google"></i> {/* Font Awesome Google Icon */}
  </button>
  
  <button className="btn-facebook-icon">
    <i className="fab fa-facebook-f"></i> {/* Font Awesome Facebook Icon */}
  </button>
</div>

  
  <p className="p">
    Don’t have an account? <a className="sign-link" href="/signup">Sign up</a>
  </p>
</div>

  )
}

export default Login;
