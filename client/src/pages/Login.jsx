import React from 'react';
import '../css/Login.css';
import { signInWithGoogle, signOutFromGoogle } from '../firebaseconfig.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const main_server_URL = import.meta.env.VITE_API_MAIN_SERVER_URL;

import '@fortawesome/fontawesome-free/css/all.min.css';

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
           
            const response=await axios.post(`${main_server_URL}/accounts/loginUservOAuth `,{
              email:person.email
            })

            localStorage.removeItem('person')
            let str=JSON.stringify(person)
            localStorage.setItem('person',str);
            localStorage.removeItem('accessToken');
            // console.log(response);
            localStorage.setItem('UserId',response.data.user._id);

            localStorage.setItem('accessToken',response.data.accessToken);
            localStorage.setItem('refreshToken',response.data.refreshToken);
              
            navigate('/',{state:{user:person}});
            
        }).catch((error) => {
            console.log(error);
            alert('user Not found')
        });
    }

    const handlelogin =async()=>{
      await axios.post(`${main_server_URL}/accounts/loginUser`,{
        email:email,
        password:password
      }).then((res)=>{
        // console.log(res)
        let user=res.data.user;
        const person={displayName:user.name,email:user.email,photoURL:user.photoURL? user.photoURL:""};
        // console.log(person)
        // console.log(res)
        const accessToken=res.data.accessToken;
        const refreshToken=res.data.refreshToken;
        localStorage.setItem('accessToken',accessToken)
        localStorage.setItem('refreshToken',refreshToken)


        
        localStorage.removeItem('person')
        let str=JSON.stringify(person)
        localStorage.setItem('person',str);
        localStorage.removeItem('accessToken');
        // console.log(response);
        localStorage.setItem('UserId',res.data.user._id);

        // localStorage.setItem('accessToken',response.data.accessToken);
        // localStorage.setItem('refreshToken',response.data.refreshToken);
          
        navigate('/',{state:{user:person}});
    
      }).catch((error)=>{
        alert(error)
      })
    }

  return (
    <div className="Login_container">
  <h1 className="login_head">User LOGIN</h1>

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
  <div className="Other-login">
  <button className="btn-google-icon" onClick={handleLoginGoogle}>
    <i className="fab fa-google"></i> {/* Font Awesome Google Icon */}
  </button>
  
 
</div>
</div>

  
  <p className="p">
    Don’t have an account? <div onClick={()=>{navigate('/signup')}}><a className="sign-link">Sign up</a></div>
  </p>
</div>

  )
}

export default Login;



// import React from 'react';
// import '../css/Login.css';
// import { signInWithGoogle, signOutFromGoogle } from '../firebaseconfig.js';
// import { json, useNavigate } from 'react-router-dom';

// const Login = () => {

//     const [user, setUser] = React.useState(null);
//     const navigate = useNavigate();

//     const handleLogin = () => {
//         signInWithGoogle().then((user) => {
//             // console.log(user);
//             setUser(user);
//             const accessToken=user.accessToken;
//             localStorage.setItem('accessToken',accessToken);
            
//             const person={displayName:user.displayName,email:user.email,photoURL:user.photoURL};
//             // console.log(JSON.stringify(person))
//             localStorage.setItem('user',JSON.stringify(person));
//             navigate('/',{state:{user:person}});
//         }).catch((error) => {
//             console.log(error);
//         });
//     }

//   return (
//     <div className="container">
//         <h1>Login</h1>

//         <input type="text" placeholder="Email Address"/>
//         <input type="password" placeholder="Password" />
//         <div>
//           <input type="checkbox" id="remember-me" />
//           <label htmlFor="remember-me">Remember me</label>
//         </div>
//         <button>Log in</button>
//         <p>or</p>
//         <button onClick={handleLogin}>Continue with Google</button>
        
//         <p>Dont have an account? <a href="/signup">Sign up</a></p>

//         <p className="developer">Developer Name</p>
//     </div>
//   )
// }

// export default Login;