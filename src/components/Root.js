import React from 'react';
import PetList from './PetList';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from '../petdata';

const Root = () => {
  const [selectedSpecies, setSelectedSpecies] = React.useState('');
  function handleChange(type) {
    console.log(type);
    setSelectedSpecies(type);
  }
  return (
    <>
      <h1>Adoption Center</h1>
      <select onChange={() => handleChange(event.target.value)}>
        <option value="">all</option>
        <option value="cat">cats</option>
        <option value="dog">dogs</option>
      </select>
      <PetList pets={samplePets} selectedSpecies={selectedSpecies} />
    </>
  );
};

export default Root;
