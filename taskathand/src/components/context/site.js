// import React, { useState } from 'react';


// export const TaskContext = React.createContext();


// }
// export default TaskContext;

// Create a context for managing application settings and provide this at the application level
// Display or Hide completed items (boolean)
// Number of items to display per screen (number)
// Default sort field (string)
// You may manually set (hard code) those state settings in the context provider during development

import React, { useState } from 'react';

// import {Foobar} from 'site.js';
export const SiteContext = React.createContext();;

function Site(props) {

  const [title, setTitle] = useState('Class 401n18');
  const [type, setType] = useState('Nights and Weekends');

  const contextualState = {
    title,
    type,
    changeTitleTo: setTitle,
    changeTypeTo: setType
  }

  // Right now, this is <Main />
  return (
    <SiteContext.Provider value={contextualState}>
      {props.children}
    </SiteContext.Provider>
  )
}

// import WhateverIwantToCallIt from './site.js'
export default Site;