import React, { useState } from 'react';
import Jokes from "./Jokes";
import "../styles/TimeMenu.css";

const TimeMenu = () => {
  // Sample multiple lists
  const [lists] = useState({
    
    First_Period: ['tg-011', 'tg-101', 'tg-211', 'tg-313', 'tg-407', 'tg-403', 'tg-505', 'tg-513', 'tg-522'],
    Second_Period: ['tg-012', 'tg-102', 'tg-211', 'tg-213', 'tg-302', 'tg-402', 'tg-411', 'tg-502', 'tg-511', 'tg-513'],
    Third_Period: ['tg-013', 'tg-103', 'tg-211', 'tg-213', 'tg-313', 'tg-401', 'tg-412', 'tg-503', 'tg-511'],
    Fourth_Period: ['tg-013', 'tg-105', 'tg-201', 'tg-213', 'tg-303', 'tg-402', 'tg-513', 'tg-502', 'tg-513'],
    Fifth_Period: ['tg-012', 'tg-113', 'tg-204', 'tg-211', 'tg-311', 'tg-403', 'tg-411', 'tg-504', 'tg-511', 'tg-513'],
    Sixth_Period: ['tg-011', 'tg-112', 'tg-203', 'tg-211', 'tg-301', 'tg-405', 'tg-411', 'tg-501', 'tg-503', 'tg-510'],
    Seventh_Period: ['tg-012', 'tg-101', 'tg-211', 'tg-201', 'tg-311', 'tg-413', 'tg-422', 'tg-511', 'tg-512', 'tg-522'],
    Eighth_Period: ['tg-012', 'tg-102', 'tg-205', 'tg-203', 'tg-312', 'tg-410', 'tg-413', 'tg-503', 'tg-512', 'tg-523'],
    Nineth_Period: ['tg-013', 'tg-111', 'tg-203', 'tg-202', 'tg-313', 'tg-412', 'tg-413', 'tg-503', 'tg-512', 'tg-524'],
    Tenth_Period: ['tg-012', 'tg-101', 'tg-201', 'tg-203', 'tg-301', 'tg-410', 'tg-412', 'tg-503', 'tg-512', 'tg-515'],
  });

  const [visibleList, setVisibleList] = useState({});

  // Toggle visibility of a specific list
  const handleToggleList = (listName) => {
    setVisibleList(prevState => ({
      ...prevState,
      [listName]: !prevState[listName], // Toggle between true and false
    }));
  };

  return (
    <div>
      <h1>WELCOME TO TURING BLOCK</h1>
      <h3>😄"You’ve reached the safe zone. No lectures, no homework, just the sweet sound of silence... and freedom!"😄</h3>
      <Jokes />
      <h2>CLICK THE BUTTON TO CHECK VACANT CLASS</h2>
      <h1>👇🏻</h1>
      
      {/* Buttons to toggle visibility of each list */}
      {Object.keys(lists).map((listName, index) => (
        <div key={index}>
          <button onClick={() => handleToggleList(listName)}>
            {visibleList[listName] ? `Hide ${listName}` : `Show ${listName}`}
          </button>
          
          {/* Display the list if it is visible */}
          {visibleList[listName] && (
            <ul>
              {lists[listName].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default TimeMenu;
