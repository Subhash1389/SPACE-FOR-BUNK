import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from "./images.png";



const HomePage = () => {
    const navigate = useNavigate();
  
    return (
      <div className="container">
        <img src={img}/>
        <h1>WELCOME TO CHITKARA UNIVERSITY</h1>
        <h2>TURING BLOCK</h2>
        <h3>"Welcome to the place where the Wi-Fi is weak, the excuses are strong, and attendance is just a suggestion. Happy hiding!" 😄</h3>
        <div className="button-grid">
          <button className="TimeMenu" onClick={() => navigate('/timemenu')}>ENTER HERE TO SEARCH CLASSROOM</button>
          
          
        </div>
      </div>
      
    );
  };
  
  export default HomePage;