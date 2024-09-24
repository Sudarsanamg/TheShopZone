import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/EditProduct.css';  // Import the CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const EditProduct = () => {
  const location = useLocation();
  const { product } = location.state;
  const navigate = useNavigate();
  const accessToken=localStorage.getItem('accessToken')


  const [prod, setProd] = React.useState(product);
  const [desc, setDesc] = React.useState(product.description);
  const [name, setName] = React.useState(product.name);
  const [price, setPrice] = React.useState(product.price);
  const [quantity, setQuantity] = React.useState(product.quantity);

//   console.log(prod);

const updateProduct =async()=>{
    let data=product;
    const id=data._id;
    data={
        ...data,
        name,
        description:desc,
        price,
        quantity
  
    }
    delete data._id;
    console.log(data);
    try {   
    await axios.post('http://localhost:3000/products/updateProduct/',{
      id:id,
      data:data
    },{
      headers:{
        'Authorization': `Bearer ${accessToken}`,
      }
    }).then((res)=>{alert(res.message);navigate('/home')}).catch((res)=>alert(res.error))
    
  } catch (error) {
      console.log(error);

  }
}

 const handleBack =()=>{
  navigate('/home') 
 }

  return (
    <div className="edit-product-container">
            <button onClick={handleBack}>Back</button>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name of Product"
        className="edit-product-input"
      />
      <textarea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
        className="edit-product-textarea"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        className="edit-product-input"
      />
      <input
        type="text"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
        className="edit-product-input"
      />
      <button className="edit-product-button" onClick={updateProduct}>Update</button>
    </div>
  );
};

export default EditProduct;