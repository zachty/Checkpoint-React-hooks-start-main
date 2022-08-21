import React from 'react';
import DeletePet from './DeletePet';

function SinglePet(props) {
  const [adopted, setAdopted] = React.useState(false);

  //check to see if animal has already been adopted
  React.useEffect(() => {
    if (props.adoptedList.includes(props.pet)) setAdopted(true);
  }, []);

  //toggles between adopted and not, adding to adopted list
  function handleClickAdopt() {
    setAdopted(!adopted);
    if (!adopted) {
      const newArr = [...props.adoptedList, props.pet];
      props.setAdoptedList(newArr);
    } else {
      const newArr = props.adoptedList.splice(
        props.adoptedList.indexOf(props.pet),
        1
      );
      props.setAdoptedList(newArr);
    }
  }

  //Render this stuff
  return (
    <div className={adopted ? 'single-pet adopted' : 'single-pet'}>
      <h3>{props.pet.name}</h3>
      <p>{props.pet.species === 'cat' ? '🐈‍⬛cat🐈' : '🐕‍🦺dog🐕'}</p>
      <p>{props.pet.description}</p>
      <hr />
      {adopted ? (
        <p>
          <strong>Adopted</strong>
        </p>
      ) : (
        <p>
          <strong>Available</strong>
        </p>
      )}
      <div
        className={!adopted ? 'button adopted' : 'button'}
        onClick={() => handleClickAdopt()}
      >
        Toggle Status
      </div>
      <DeletePet handleClickDelete={props.handleClickDelete} pet={props.pet} />
    </div>
  );
}

export default SinglePet;
