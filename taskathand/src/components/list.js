import { Toast } from 'react-bootstrap';
import React, { useState } from 'react';
// import ToastHeader from 'react-bootstrap/ToastHeader'



function TodoList(props) {
  const [show, setShow] = useState(false);
  return (
    props.list.map(item => (
      <Toast onClose={() => setShow(false)} show={true} onClick={() => props.handleComplete(item._id)}>
        <Toast.Header closeButton='true'>
        </Toast.Header>
        <Toast.Body className={`complete-${item.complete.toString()}`}
          // Keys do not have to be unique globally. They just need to be unique across sibling elements.
          key={item._id}>
          <strong className="mr-auto">Task:</strong>
          {item.text}</Toast.Body>
      </Toast >
    ))
  );
}

export default TodoList;
