import React from 'react';
import SinglePet from './SinglePet';

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList(props) {
  return (
    <>
      <div className="pet-list">
        {props.pets.map((pet) =>
          pet.species === props.selectedSpecies ||
          props.selectedSpecies === '' ? (
            <SinglePet pet={pet} key={pet.id} />
          ) : (
            <></>
          )
        )}
      </div>
    </>
  );
}

export default PetList;
