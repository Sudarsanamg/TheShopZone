import React from 'react';
import '../css/SignUp.css';
import axios from 'axios'
import { signInWithGoogle } from '../firebaseconfig.js';
import { useNavigate } from 'react-router-dom';




const SignUp = () => {


    const navigate = useNavigate();

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [phone,setPhone] =React.useState('')


    const createRandom=()=>{
      let str="qwertyuiopasdfghjklzxcvbnm1234567890ASDFGHJKLQWERTYUIOPZXCVBNM";
      let res=""
      for(let i=0;i<8;i++){
        let num=Math.random();
        num=num*str.length
        res+=str.charAt(num);
      }
      return res;
    }

    const handleSignUpWithGoogle =async () => {
        signInWithGoogle().then(async(user) => {
            
            const person={displayName:user.displayName,email:user.email,photoURL:user.photoURL};
            // console.log(person.email)
            let isPersonAvailable=await axios.post('http://localhost:3000/accounts/isPersonAvailable',{
              email:person.email
            })

            

          
            if(isPersonAvailable.data){
              alert('The email Id is already in use');
            }
            else{
              const seller ={
                name:person.displayName,
                email:person.email,
                password:createRandom(),
                phone:1234567890
              }
              
              await axios.post('http://localhost:3000/accounts/createSellervOauth',{
                seller:seller
              }).then((res)=>{
                const accessToken=res.data.accessToken;
                const refreshToken=res.data.refreshToken;
                localStorage.setItem('accessToken',accessToken );
                localStorage.setItem('refreshToken',refreshToken);
                navigate('/home',{state:{user:person}});
              }).catch((error)=>{
                alert(error)
              })

           
            }

        }).catch((error) => {
            console.log(error);
        }
        );
    }

    const handleSignUp=async()=>{
      if(password!=confirmPassword){
        alert('Password does not match')
      }
      else{
      const data={
        name:name,
        email:email,
        password:password,
        phone:phone
      }
      const response= await axios.post('http://localhost:3000/accounts/createSeller',{
        data:data
      });

      }
    }

  return (
    <div className="container">
        <h1>Seller Sign Up</h1>
      <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your Name" />
      <input type="text"value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email Address *" />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}placeholder="Password" />
      <input type="password"value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
      <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Enter your phone number' />
      <button onClick={handleSignUp}>Sign Up</button>
      <label>Already have an account?</label>
      <a href="/">Login</a>
      <p>or</p>
        <button onClick={handleSignUpWithGoogle}>Continue with Google</button>
    </div>
  );
};

export default SignUp;
