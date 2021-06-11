import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const ToDoForm = (props) => {

  const [item, itemsState] = useState({});//or bool

  const { register, handleSubmit } = useForm();




  let handleInputChange = e => {
    itemsState({ ...item, [e.target.name]: e.target.value });
  };

  // let handleSubmitOriginal = (e) => {
  // };
  const onSubmit = (e) => {
    // e.target.reset();
    props.handleSubmit(item);
    // itemsState({});
    console.log('Giving me this object', item);
  }


  return (
    <>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
            register={register} required
          />

        </label>
        <label>
          <span>Difficulty Rating</span>
          <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange}
            register={register} required />
        </label>
        <label>
          <span>Assigned To</span>
          <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange}
            register={register} required />
        </label>
        <button type='submit'>Add Item</button>
      </form>
    </>
  );
}

export default ToDoForm;
