import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle, signOutFromGoogle } from '../firebaseconfig.js';

import axios from 'axios'


const Home = () => {
    // const location = useLocation();
    // const user=location.state.user;
    // const userMail=user.email;
    const [user,setUser]=React.useState('')
    const navigate = useNavigate();
    const [products,setProducts]=React.useState([]);
    const accessToken=localStorage.getItem('accessToken')

    // console.log(accessToken)


    const routeAddProduct =()=>{
      navigate('/addProduct')
    }
    // console.log(user)

    const SignOut=()=>{
      try {
        signOutFromGoogle().then(navigate('/')).catch((e)=>{
          localStorage.removeItem('accessToken')
        navigate('/')
        })

      } catch (error) {
        localStorage.removeItem('accessToken')
        navigate('/')
      }
    }

    React.useEffect(()=>{
      const getProducts=async()=>{
        // console.log(accessToken)
        try {
          await axios.post('http://localhost:3004/authenticateJWT',{
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            }
          }).then((response)=>{setUser(response.data.user);setProducts(response.data.user.products) }).catch((error)=>console.log(error))
        
          
        } catch (error) {
          console.log(error)
        }
       
      }
      getProducts();
    
    },[])

  return (
    
    <div>
      <button onClick={routeAddProduct}>AddProduct</button>
      <button onClick={SignOut}>SignOut</button>
      <p>
      {user.name}
      </p>
      {products.map(doc=>(
        <div key={doc.id}>
        <p >{doc.name}</p>
        </div>
      ))
    }
      

      
    </div>
  )
}

export default Home