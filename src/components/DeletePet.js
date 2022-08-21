import React from 'react';
import axios from 'axios';

const DeletePet = (props) => {
  return (
    <div
      className="delete-pet"
      onClick={() =>
        (async () => {
          try {
            await axios.delete(`/api/pets/${props.pet.id}`);
            props.handleClickDelete(props.pet);
          } catch (err) {
            console.error(err);
          }
        })()
      }
    >
      Delete Pet :(
    </div>
  );
};

export default DeletePet;
