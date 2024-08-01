import React from 'react'
import axios from 'axios'


const AddProduct = () => {

    const[name,setname]=React.useState('')
    const[price,setprice]=React.useState('')
    const[description,setdescription]=React.useState('')
    const[image,setimage]=React.useState('')


   async function handleSubmit(){

       
            if (image!= null) {
                const formData = new FormData();
                formData.append('file', image);

                const response = await axios.post('http://localhost:5000/upload', formData);
                console.log(response.data.url);
                const product = {
                    name: name,
                    price: price,
                    description: description,
                    image: response.data.url
                }

          try {
            const response=await axios.post('http://localhost:3000/products/addProduct',product);
            console.log(response.data)

          } catch (error) {
            console.log(error)
          }      

    }
}

   
    

  return (
    <div>
        AddProduct

        <input type="text" value={name}  onChange={(e)=>setname(e.target.value)} placeholder='enter product name' />

        <input type="text" value={price}  onChange={(e)=>setprice(e.target.value)} placeholder='enter product price' />

        <input type="text" value={description} onChange={(e)=>setdescription(e.target.value)} placeholder='enter product description' />

        <input type="file"  onChange={(e)=>setimage(e.target.files[0])}  placeholder='choose image' />

        <button onClick={handleSubmit}>Submit</button>
        
    </div>
  )
}



export default AddProduct;