import React from 'react';
import './Plant.css';

const Plant = ({ plant, onRemove, onUpdateLastWatered }) => {
  const today = new Date();
  const lastWatered = new Date(plant.lastWatered);
  const diffTime = Math.abs(today - lastWatered);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div className='plant'>
      <h2>{plant.name}</h2>
      <p>Days since last watered: {diffDays}</p>
      <p>Last watered: {lastWatered.toLocaleDateString()}</p>
      <button onClick={onUpdateLastWatered}>Update Last Watered</button>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default Plant;
