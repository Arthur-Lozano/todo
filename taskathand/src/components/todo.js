import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Nav from './nav/nav';
import { Card } from 'react-bootstrap';
import Auth from './auth/Auth'
// import Pagination from '../components/pagination/pagination';
import './todo.scss';

const ToDo = (props) => {

  let [list, setList] = useState([]);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let listitem = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(listitem);
    }

  }

  useEffect(() => {
    let dumData = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];
    setList(dumData);
  }, [])

  //   setList({ list });
  // }

  return (
    <>
      <Auth />
      <Nav />
      <section className="todo">
        <div>
          <Card variant='dark' style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                There are {list.filter(item => !item.complete).length} Items To Complete
                </Card.Text>
              <TodoForm handleSubmit={addItem} />
              {/* <Button variant="dark">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
          />
        </div>
      </section>
      {/* <Pagination /> */}
    </>
  )
}


export default ToDo;
