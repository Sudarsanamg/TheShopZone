import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import "../../css/Search.css";

const apiUrl = import.meta.env.VITE_API_MAIN_SERVER_URL;

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState("");
  const [response, setResponse] = React.useState([]);

  const main_server_URL = apiUrl;

  const handleSearch = async (e) => {
    setQuery(e.target.value);

    try {
      const res = await axios.get(`${main_server_URL}/products/searchProduct`, { params: { search: `${e.target.value}` } });
      setResponse(res.data); // Assuming the response data is an array
      console.log(res);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleRoute =(e,name)=>{
    // console.log(name)
    navigate('/productList',{state:{productQuery : name}});
  }

  return (
    <div className="search-container">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => handleSearch(e)} 
        placeholder='Search products...' 
        className="search-input"
      />
      {response.length >= 1 && (
        <div className="search-results">
          {response.map((item, index) => (
            <div key={index} className="search-result-item" onClick={(e)=>handleRoute(e,item.name)}  >{item.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
<div className=""></div>