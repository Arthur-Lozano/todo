import React, { useState, useContext } from 'react';
import { LoginContext } from '../context/context';

const [user, setUser] = useState(false);
const userContext = useContext(LoginContext);

const handleChange = (e) => {
  setUser({ ...user, [e.target.name]: e.target.value })
}

const handleSubmit = (e) => {
  e.preventDefault();
  //send the user object to context
  userContext.login(user);
}

return (
  <form onSubmit={handleSubmit}>
    <input placeholder='username' name='username' onChange={handleChange} />
    <input placeholder='password' name='password' onChange={handleChange} />
    <button>Login</button>
  </form>
)

