
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Dashboard from './component/dashboard';
import Login from './component/login';
import Preferences from './component/preferences';
import useToken from './component/useToken';
function App(){

  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return(
    <div className="app">
      <div> 
        <h1 className='title'> Application</h1>
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/' element={<Preferences/>}/>
        </Routes>

      </Router>
    </div>
  )
}

export default App;