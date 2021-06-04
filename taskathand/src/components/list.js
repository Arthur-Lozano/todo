import React from 'react';
import { Toast } from 'react-bootstrap';



function TodoList(props) {
  return (
    props.list.map(item => (
      <Toast onClick={() => props.handleComplete(item._id)}>
        <Toast.Body className={`complete-${item.complete.toString()}`}
          key={item._id}>
          <strong className="mr-auto">Task:</strong>
          {item.text}</Toast.Body>
      </Toast >
    ))
  );
}

export default TodoList;
