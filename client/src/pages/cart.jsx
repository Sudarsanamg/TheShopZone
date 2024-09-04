import axios from 'axios';
import React from 'react'
const main_server_URL = import.meta.env.VITE_API_MAIN_SERVER_URL;


const Cart = () => {
  // const sum=0;
  // let user=JSON.parse(localStorage.getItem('user'));

  // const [products,setProducts]=React.useState([])

  // React.useEffect(async()=>{
  //   user=await axios.get()
  // },[])

  const userId=localStorage.getItem("UserId");

  const [cart,setCart]=React.useState([]);


  React.useEffect(()=>{

    const fetchData=async()=>{
      await axios.post(`${main_server_URL}/products/getMyCart`,{
        userId:userId
      }).then((res)=>{
        // console.log(res);
        setCart(res.data.cart)}).catch((err)=>alert(err));

    }
    

    fetchData();
  },[])


  return (
    <div>
      Cart

      {cart.length>1 && cart.map((item,index)=>(
        <div key={index}>
        <p>{item.name}</p>
        <button>Delete</button>
        </div>
      ))}

    </div>
  )
}

export default Cart