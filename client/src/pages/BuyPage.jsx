import React from 'react'
import { useLocation } from 'react-router-dom';


const BuyPage = () => {

const location = useLocation();
    const {product,user}= location.state;

    const [street,setStreet]=React.useState('')
    const [area,setArea]=React.useState('');
    const  [city,setCity]=React.useState('')
    const [state,setState]=React.useState('')
    const [pincode,setPinCode]=React.useState('');
    const [quantity,setQuantity]=React.useState(1);

    // only one time the user should enter the address



  return (
    <div>
        
        <div>
        <h5>Delivery Address</h5>
        <input type="text" placeholder="Street" value={street} onChange={(e)=>setStreet(e.target.value)}/>
        {/* <input type="text" placeholder="Area" value={area} onChange={(e)=>setArea(e.target.value)}/> */}
        <input type="text" placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)}/>
        <input type="text" placeholder="State" value={state} onChange={(e)=>setState(e.target.value)}/>
        <input type="text" placeholder="Pincode" value={pincode} onChange={(e)=>setPinCode(e.target.value)}/>
        </div>

        <div>
            <button onClick={()=>{
                if(quantity>1){
                    setQuantity(quantity-1)
                }
            }}
            >-</button>
            {quantity}
            <button onClick={()=>{
                if(quantity<5){
                    setQuantity(quantity+1)
                }
            }}>+</button>
        </div>

        <h5>Total Price</h5>
        {product.price*quantity}

        <button>Continue</button>

        
    </div>
  )
}

export default BuyPage