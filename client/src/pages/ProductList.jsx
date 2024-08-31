import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header/navbar';
const main_server_URL = import.meta.env.VITE_API_MAIN_SERVER_URL;



const ProductList = () => {
  const navigate = useNavigate();

    // here the entire list of the product of multiple sellers listed
    const location = useLocation();
    const { productQuery } = location.state || {};

    const user=JSON.parse(localStorage.getItem('user'));

    // console.log(user)

    // console.log(JSON.parse(user));



    const [productJson,setProductJson]=React.useState([]);


    const [filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };



    React.useEffect(()=>{
      
      const fetchData =async()=>{
        try {
    // console.log(productQuery)

          const res = await axios.get(`${main_server_URL}/products/searchProductAll`, { params: { search: `${productQuery}` } });
          console.log(res)
        setProductJson(res.data);
          
        } catch (error) {
          console.log(error);
        }
        

      }

      fetchData();
    },[productQuery])


    React.useEffect(()=>{
      if(filter==='option1'){
        const sorted = [...productJson].sort();
        setProductJson(sorted);

      }
      else if(filter==='option2'){
        const sorted = [...productJson].sort((a, b) => b.price - a.price);
        setProductJson(sorted);

      }

    },[filter])

    

    // console.log(productQuery);


    const handleRouteToProduct =(item)=>{
      navigate('/product',{state:{product : item}});
    }



  return (
    <div>
       <Header props={user}/>
       
      <label htmlFor="dropdown">Choose an option:</label>
      <select id="dropdown" value={filter} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="option1">Price Low to High</option>
        <option value="option2">Price High to Low</option>
        {/* <option value="option3">Option 3</option> */}
      </select>
      
    

        {productJson.length>0 && productJson.map((item,index)=>(
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