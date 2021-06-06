import { Toast } from 'react-bootstrap';
import React, { useState } from 'react';



function TodoList(props) {
  const [show, setShow] = useState(false);
  return (
    props.list.map(item => (
      <Toast onClose={() => setShow(false)} show={true} onClick={() => props.handleComplete(item._id)}>
        <Toast.Header closeButton='true'>
        </Toast.Header>
        <Toast.Body onClick={() => { console.log('Hello Hoob') }}>
          <strong className="mr-auto">Task:</strong>
          {item.text}</Toast.Body>
        <ul>
          <li
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
          </li>
        </ul>
      </Toast >
    ))
  );
}

export default TodoList;
