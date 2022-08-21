import React from 'react';
import axios from 'axios';

function AddPet(props) {
  //   const [name, setName] = React.useState('');

  async function handleSubmit(event) {
    try {
      const newPet = await axios.post('/api/pets', {
        name: event.target.form[0].value,
        description: event.target.form[1].value,
        species: event.target.form[2].value,
      });
      props.handleAddPet(newPet);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form>
      <div className="form-labels">
        <label htmlFor="name">Name:</label>
        <label htmlFor="description">Description:</label>
        <label htmlFor="species">Species:</label>
      </div>
      <div className="form-fields">
        <input id="name" type="text" name="name" />

        <textarea id="description" name="description" />
        <select id="species" name="species">
          <option default hidden value="">
            Select One
          </option>
          <option value="cat">cat</option>
          <option value="dog">dog</option>
        </select>
      </div>
      <div className="submit-button">
        <input
          type="submit"
          onClick={() => {
            handleSubmit(event);
          }}
        />
      </div>
    </form>
  );
}

export default AddPet;
