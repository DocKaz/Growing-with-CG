import React, { useState } from 'react';
import './AddPlant.css';

const AddPlant = ({ onAdd }) => {
  const [newPlant, setNewPlant] = useState({
    name: '',
    lastWatered: new Date(),
  });

  const handleChange = (event) => {
    setNewPlant({ ...newPlant, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ ...newPlant, lastWatered: new Date(newPlant.lastWatered) });
    setNewPlant({ name: '', lastWatered: new Date() });
  };

  return (
    <form onSubmit={handleSubmit} className='add-plant-form'>
      <input
        type='text'
        name='name'
        placeholder='Plant Name'
        value={newPlant.name}
        onChange={handleChange}
      />
      <input
        type='date'
        name='lastWatered'
        value={newPlant.lastWatered}
        onChange={handleChange}
      />
      <button type='submit' className='add-plant-button'>
        Add Plant
      </button>
    </form>
  );
};

export default AddPlant;
