import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const main_server_URL = import.meta.env.VITE_API_MAIN_SERVER_URL;



const ProductList = () => {
  const navigate = useNavigate();

    // here the entire list of the product of multiple sellers listed
    const location = useLocation();
    const { productQuery } = location.state || {};


    const [productJson,setProductJson]=React.useState([]);


    React.useEffect(()=>{
      
      const fetchData =async()=>{
        try {
    // console.log(productQuery)

          const res = await axios.get(`${main_server_URL}/products/searchProductAll`, { params: { search: `${productQuery}` } });
          console.log(res)
        setProductJson(res.data);
          
        } catch (error) {
          console.log(error);
        }
        

      }

      fetchData();
    },[])

    // console.log(productQuery);


    const handleRouteToProduct =(item)=>{
      navigate('/product',{state:{product : item}});
    }



  return (
    <div>
        {productJson.length>0 && productJson.map((item,index)=>(
          <div key={index} onClick={()=> handleRouteToProduct(item)}>
            <p>{item.name}</p>
            <h4>{item.price}</h4>
            <h5>{item.rating}</h5>
            <img src={item.image} alt="" />
            <hr />
          </div>
      
        ))}
    </div>
  )
}

export default ProductList