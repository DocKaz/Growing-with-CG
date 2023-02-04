import React, { useState } from 'react';
import Plant from './Plant';
import AddPlant from './AddPlant';

import './GrowWithCG.css';

const GrowWithCG = () => {
  const [plants, setPlants] = useState([
    { id: 1, name: 'Tomato Plant', lastWatered: new Date('2022-01-01') },
    { id: 2, name: 'Pepper Plant', lastWatered: new Date('2022-01-03') },
    { id: 3, name: 'Lemon Tree', lastWatered: new Date('2022-01-05') },
  ]);

  const handleAddPlant = (newPlant) => {
    setPlants([...plants, { ...newPlant, id: Date.now() }]);
  };

  const handleRemovePlant = (id) => {
    setPlants(plants.filter((plant) => plant.id !== id));
  };

  const handleUpdateLastWatered = (id) => {
    setPlants(
      plants.map((plant) =>
        plant.id === id ? { ...plant, lastWatered: new Date() } : plant
      )
    );
  };

  return (
    <div className='GrowWithCG'>
      <h1>Grow with CG</h1>
      <AddPlant onAdd={handleAddPlant} />
      {plants.map((plant) => (
        <Plant
          key={plant.id}
          plant={plant}
          onRemove={() => handleRemovePlant(plant.id)}
          onUpdateLastWatered={() => handleUpdateLastWatered(plant.id)}
        />
      ))}
    </div>
  );
};

export default GrowWithCG;
