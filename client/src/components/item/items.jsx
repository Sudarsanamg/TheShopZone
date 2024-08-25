import React from 'react'
import './item.css'

const Items = (props) => {
  return (
    <div className='container-item'>
      <img className='item-image' src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-price">
        <div className="item-new-price">
        {props.new_price}
        </div>
      <div className="item-old-price">
      {props.old_price}
      </div>
      </div>
    </div>
  )
}

export default Items