// src/config.js

require('dotenv').config();
const config = {
    Main_server_url:process.env.Main_server_url,
    apiUrl: REACT_APP_API_URL,
    apiKey: process.env.REACT_APP_API_KEY,
  };
  
  export default config;
  