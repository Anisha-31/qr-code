import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from 'prop-types';


async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

   

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
 const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
    // const { loginWithRedirect } = useAuth0();
    return(
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
          </label>
          <div>
            <button  type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }