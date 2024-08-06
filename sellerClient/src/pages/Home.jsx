import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const Home = () => {
    const location = useLocation();
    const user=location.state.user;
    const userMail=user.email;
    const navigate = useNavigate();
    const [products,setProducts]=React.useState([]);
    const accessToken=localStorage.getItem('accessToken')


    const routeAddProduct =()=>{
      navigate('/addProduct')
    }
    console.log(user)
    React.useEffect(()=>{
      const getProducts=async()=>{
        console.log(accessToken)
        try {
          await axios.post('http://localhost:3000/products/getProducts',{
            email:userMail
          },{
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            }
          }).then((res)=>{console.log(res.data.products);setProducts(res.data.products)}).catch((error)=>console.log(error))
        } catch (error) {
          console.log(error)
        }
       
      }
      getProducts();
    },[])

  return (
    
    <div>
      <button onClick={routeAddProduct}>AddProduct</button>
      {user.displayName}
      {products.map(doc=>(
        <div key={doc.id}>
        <p >{doc.name}</p>
        <img src={doc.image} alt="" />
        </div>
      ))
    }
      

      
      </div>
  )
}

export default Home