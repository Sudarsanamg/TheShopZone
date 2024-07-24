import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes,Route,  } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Login} exact />
          <Route path="/signup" Component={SignUp} />
          <Route path="/home" Component={Home} />
        </Routes>
      </Router>
    </>
  )
}

export default App
