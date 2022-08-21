import React from 'react';
import axios from 'axios';
import PetList from './PetList';
import AddPet from './AddPet';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.

const Root = () => {
  //handle getting data when page first loads
  const [petList, setPetList] = React.useState([]);
  const [adoptedList, setAdoptedList] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      try {
        setPetList((await axios.get('/api/pets')).data);
      } catch (err) {
        console.error(err);
        setPetList(err.message);
      }
    })();
  }, []);

  //handle changing which pets to view
  const [selectedSpecies, setSelectedSpecies] = React.useState('');
  function handleChange(type) {
    setSelectedSpecies(type);
  }

  //deletes a pet
  function handleClickDelete(pet) {
    if (adoptedList.includes(pet)) {
      const newAdoptedList = adoptedList.splice(adoptedList.indexOf(pet), 1);
      setAdoptedList(newAdoptedList);
    }
    const newPetList = petList.splice(petList.indexOf(pet), 1);
    setAdoptedList(newPetList);
  }

  //submits a pet
  function handleAddPet(pet) {
    const newPetList = [...petList].push(pet);
    setAdoptedList(newPetList);
  }

  return (
    <>
      <h1>Adoption Center</h1>
      <select onChange={() => handleChange(event.target.value)}>
        <option value="">all</option>
        <option value="cat">cats</option>
        <option value="dog">dogs</option>
      </select>
      <hr />
      {typeof petList === 'string' ? (
        <h2>Server Error: {petList}</h2>
      ) : !petList[0] ? (
        <h2>🐈Loading...🐕</h2>
      ) : (
        <PetList
          pets={petList}
          selectedSpecies={selectedSpecies}
          adoptedList={adoptedList}
          setAdoptedList={setAdoptedList}
          handleClickDelete={handleClickDelete}
        />
      )}
      <hr />
      <h3>Add a pet!</h3>
      <div className="add-pet">
        <AddPet handleAddPet={handleAddPet} />
      </div>
    </>
  );
};

export default Root;
