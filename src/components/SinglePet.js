import React from 'react';

function SinglePet(props) {
  const [adopted, setAdopted] = React.useState(false);
  function handleClickAdopt() {
    setAdopted(!adopted);
  }
  return (
    <div className={adopted ? 'single-pet adopted' : 'single-pet'}>
      <p>{props.pet.name}</p>
      <p>{props.pet.species}</p>
      <p>{props.pet.description}</p>
      <hr />
      <button onClick={() => handleClickAdopt()}>Toggle Status</button>
    </div>
  );
}

export default SinglePet;
