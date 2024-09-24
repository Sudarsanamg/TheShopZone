import React from 'react'
import axios from 'axios'
import '../css/AddProduct.css'
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {

    const[name,setname]=React.useState('')
    const[price,setprice]=React.useState('')
    const[description,setdescription]=React.useState('')
    const[image,setimage]=React.useState('')
    const[quantity,setQuantity]=React.useState('');
    const navigate = useNavigate();
    const accessToken=localStorage.getItem('accessToken');



   async function handleSubmit(){

            if (image!= null) {
                const formData = new FormData();
                formData.append('file', image);

                const response = await axios.post('http://localhost:5000/upload', formData);
                const user=await axios.post('http://localhost:3004/authenticateJWT',{
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                  }
                })
                // let seller=user.data.user;
                console.log(user)
                let seller=user.data.user;
                
                const product = {
                    
                    name: name,
                    sellername:seller.name,
                    selleremail:seller.email,
                    price: price,
                    description: description,
                    image: response.data.url,
                    quantity:quantity
                   
                }
                console.log(product)

          try {
            const response=await axios.post('http://localhost:3000/products/addProduct', 
              { product:product},{
                headers: {
                  'Authorization': `Bearer ${accessToken}`,
                }
              }
              );
            console.log(response.data)
            alert('Product added Successfully!')
            navigate('/home')   
            
            

          } catch (error) {
            console.log(error)
          }  
          

    }
    else{
      alert('Fill the essentials')
    }
    
}

   
    

  return (
    <div>
        AddProduct

        <input type="text" value={name}  onChange={(e)=>setname(e.target.value)} placeholder='enter product name' />

        <input type="text" value={price}  onChange={(e)=>setprice(e.target.value)} placeholder='enter product price' />

        <input type="text" value={description} onChange={(e)=>setdescription(e.target.value)} placeholder='enter product description' />

        <input type='text' value={quantity} onChange={(e)=>setQuantity(e.target.value)} placeholder='Enter the quantity'/>

        <input type="file"  onChange={(e)=>setimage(e.target.files[0])}  placeholder='choose image' />

        <button onClick={handleSubmit}>Submit</button>
        
    </div>
  )
}



export default AddProduct;