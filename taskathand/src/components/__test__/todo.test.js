import React from 'react';
import ReactDOM from 'react-dom';
import additem from '../todo';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<additem></additem>, div)
})