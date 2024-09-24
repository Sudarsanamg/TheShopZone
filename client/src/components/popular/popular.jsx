import React from 'react'
import './popular.css'
import data_product from '../assets/data'
import Item from '../item/items'
import { useLocation, useNavigate } from 'react-router-dom';


const Popular = () => {
  const navigate = useNavigate();


  const handleRoute =(name)=>{
    console.log(name)
    if(name === "Shirts"){
      name = "shirt";
    }
    else if(name === "Shoes"){
      name = "shoe";
    }
    else if(name === "Coolers"){
      name = "coolers";
    }
    navigate('/productList', { state: { productQuery: name } });
  }

  return (
    <div className='popular'>
        <h1>POPULAR IN MEN</h1>
        <hr />
        <div className='popular-item'>
            {data_product.map((Items,i)=>{
                return <div key={i} onClick={()=>handleRoute(Items.name)}>
                <Item key={i} id={Items.id} name={Items.name} image={Items.image} new_price={Items.new_price} old_price={Items.old_price}  />
                </div>
            })}
        </div>
    </div>
  )
}

export default Popular