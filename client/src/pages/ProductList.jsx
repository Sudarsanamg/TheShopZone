import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const ProductList = () => {
  const navigate = useNavigate();

    // here the entire list of the product of multiple sellers listed
    const location = useLocation();
    const { productJson } = location.state || {};

    console.log(productJson);


    const handleRouteToProduct =(item)=>{
      navigate('/product',{state:{product : item}});
    }

  return (
    <div>
        {productJson.map((item,index)=>(
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