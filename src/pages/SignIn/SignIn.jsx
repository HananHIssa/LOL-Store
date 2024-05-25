import React, { useState } from 'react';
import './SignIn.css'
import { Bounce, toast } from 'react-toastify';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

const SignIn   = () => {
  const navigate = useNavigate();


  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`https://ecommerce-node4-five.vercel.app/auth/signin`, {
        email: user.email,
        password: user.password,
      });
      setUser({
        email: '',
        password: '',
      });
      toast.success('Sign in successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      console.log(data);
      localStorage.setItem('userToken', data.token);
      navigate('/');

    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    console.log('Login data submitted:', user);
  }
}

  return (
    <div className="container">
      <div className='cont'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
        <NavLink to={'/forgotPassword'}>forgot Password?</NavLink>

      </form>
    </div>
    </div>
  );
  }

export default SignIn;
