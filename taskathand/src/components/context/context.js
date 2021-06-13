import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

const API = process.env.REACT_APP_API;

const testLogins = {
  testAdmin: process.env.REACT_APP_ADMIN_TOKEN || '',
  testEditor: process.env.REACT_APP_EDITOR_TOKEN || '',
  testUser: process.env.REACT_APP_USER_TOKEN || '',
}

export const LonginContext = React.createContext();

function LoginProvider(props) {
  //Toggle to tell us if user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //user record from the API
  const [user, setUser] = useState({});

  const validateToken = token => {
    let tokenUser = jwt.verify(token, process.env.REACT_APP_SECRET)
  }

  const login = async (input) => {
    const API = `${process.env.REACT_APP_API}/signin`;
    try {
      const response = await superagent.post(API)
        .auth(input.username, input.password);

      const { token } = response.body;

      console.log(token);
    } catch (e) {
      console.warn('Login attempt failed')
    }
  }
  const sharedValues = {
    login,
    user,
    isLoggedIn
  }
  return (
    <LonginContext.Provider value={sharedValues}>
      {props.children}
    </LonginContext.Provider>
  )

}

