import React, { useState, useReducer } from 'react';
import { useForm } from "react-hook-form";

const ACTIONS = {
  ADDNOTE: 'add-note'
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADDNOTE:
      return [...todos, newTodO(item)]
    default: item
  }
}
const ToDoForm = (props) => {
  const [todos, dispatch] = useReducer(reducer, [])
  const [item, itemsState] = useState({});//or bool

  const { register, handleSubmit } = useForm();




  let handleInputChange = e => {
    itemsState({ ...item, [e.target.name]: e.target.value });
  };

  // let handleSubmitOriginal = (e) => {
  // };
  const onSubmit = (e) => {
    // e.target.reset();
    dispatch({ type: ACTIONS.ADDNOTE, payload })
    // props.handleSubmit(item);....
    // itemsState({});
    // console.log('Giving me this object', item);
    itemsState('');
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
