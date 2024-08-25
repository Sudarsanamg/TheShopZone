import React, { StrictMode } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/MyProduct.css';  // Import the CSS file

const MyProducts = () => {

  const navigate = useNavigate();
  const [products, setProducts] = React.useState([]);
  const accessToken = localStorage.getItem('accessToken');



  React.useEffect(() => {
    

    getProducts();

  }, []);
  const getProducts = async () => {
    try {
      await axios.post('http://localhost:3004/authenticateJWT',{
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      }).then((response) => { setProducts(response.data.user.products); })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }

  const handleEdit =(item)=>{
    // console.log(item);
    navigate('/editProduct',{state:{product:item}})
  }

  const deleteItem =async(item)=>{

    console.log(item);
    
                      // http://localhost:3000/products/
    await axios.post('http://localhost:3000/products/deleteProduct',{
      id:item._id
    },{
      headers:{
        'Authorization': `Bearer ${accessToken}`,
      }
    }).then((res)=>console.log(res.message)).catch((err)=>console.log(err))

    getProducts();
  }

  return (
    <div className="container">
      <StrictMode>
      <button className="back-button" onClick={() => { navigate('/home') }}>Back</button>
      <ul className="products-list">
        {products.map((item, index) => (
          <li className="product-item" key={index}>
            <span className="product-name">{item.name}</span>
            <span>{item.price} Rs</span>
            <div className="action-buttons">
              <button className="edit-button"  onClick={()=>handleEdit(item)}>Edit</button>
              <button className="delete-button" onClick={()=>deleteItem(item)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      </StrictMode>
    </div>
  )
}

export default MyProducts;
