import React from 'react';
import ReactDOM from 'react-dom';
import Additem from '../todo';
import form from '../form';

it('Renders component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Additem></Additem>, div)
})