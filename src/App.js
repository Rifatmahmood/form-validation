import React, { useState, useEffect } from "react";

import './App.css';
import { errorMessage } from './errorMessage';

function App() {
// Model 
const [errors, setErrors] = useState(errorMessage)
const [userData, setUserData] = useState({
    userName: '', 
    password: '', 
    email: ''
})
const { userName, password, email } = userData; 
  
// const [errorType, setErrorType] = useState()
  
  const handleChange = (e) => {
    const { name, value } = e.target 
    setUserData({...userData, [name]: value})
  } 
  // useEffect(() => {
 
  // }, [userData])


console.log(userData)




  return (
    <>
      <form >
        <input
          type="text"
          name='userName'
          placeholder="Username"
          value={userData.userName}
          onChange= {handleChange}
        />
        <p> {!userName || userName.length<3? errors.userName3: errors.userNameValid}</p>
        <input
          type="password"
          name='password'
          placeholder="Password"
          value={userData.password}
          onChange= {handleChange}
        />
        <p>{!password || password.length<4 || password.length> 10? errors.password3: errors.passwordValid} </p>
        <input
          type="email"
          name='email'
          placeholder="Email"
          value={userData.email}
          onChange= {handleChange}
        />
        <p>{!email || email.length<3? errors.emailNotValid: errors.emailValid} </p>
        <input type="submit" />
    </form>
    </>
  );
}

export default App;
