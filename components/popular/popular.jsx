import React from 'react'
import './popular.css'
import data_product from '../assets/data'
import Item from '../item/items'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className='popular-item'>
            {data_product.map((Items,i)=>{
                return <Item key={i} id={Items.id} name={Items.name} image={Items.image} new_price={Items.new_price} old_price={Items.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular