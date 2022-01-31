import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

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

const Login = props => {
  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const token = await loginUser({
  //     username,
  //     password
  //   });
  //   setToken(token);
  // }


  const handleLogin = () => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: ''
    });
  };

  return (
    <div className="logincontainer">
      <h1>Please Log In via GitHub Authentcatioiut</h1>
      {/* <button onClick={handleLogin}>Login</button> */}
      <button onClick={() => props.handleClick()}>Login</button>
    </div>
  );
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// };

export default Login;
