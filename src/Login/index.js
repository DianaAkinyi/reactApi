import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
const Login = () => {
  const[isSubmitted , setIssubmitted]=useState(false)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[message ,setmessage] = useState('');
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIssubmitted(true)
    setmessage("Successfully logged in")
    const data = {
      username: username,
      password: password,
    };
    console.log(data);
    if(setmessage){
    }
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      if (result.success) {
        setLoginSuccess(true);
        setTimeout(() => {
          navigate('/products');
        }, 1000);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h1 className='FORM'>Login</h1>
      {loginSuccess && <p>Login successful!</p>}
      <form className='form' onSubmit={handleSubmit}>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder='Enter username'
          />
           <br/>
           <br/>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required placeholder='Enter password'
          />
          <br/>
          <br/>
        <button className="btn" type="submit">
          <Link to="/products">Login</Link>
          
        </button>
      </form>
      {isSubmitted && <p>{message}</p>}
    </div>
  );
};
export default Login;