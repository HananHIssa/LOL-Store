import React from 'react'
import { useState } from 'react';
import './SignUp.css'
function SignUp() {
  const [user,setUser] =useState({
    userName:'',
    email:'',
    password:'',
    image:'',
  }
  );
  const handleChange = (e)=>{
    const {name,value}=e.target;
    setUser({
      ...user,
      [name]:value
    });
  };
  const handleSumbit = (e)=>{
    e.preventDefult();

  };
  return (
    <div className='container'>
      <div className="cont">
        <form onSubmit={handleSumbit}>
          <div className="form-group">
            <label className="label">User Name</label>
            <input
              type="text"
              value={user.userName}
              name="userName"
              onChange={handleChange}
              className="input"
            />
          </div>
  
          <div className="form-group">
            <label className="label">Email</label>
            <input
              type="text"
              value={user.email}
              name="email"
              onChange={handleChange}
              className="input"
            />
          </div>
  
          <div className="form-group">
            <label className="label">Password</label>
            <input
              type="text"
              value={user.password}
              name="password"
              onChange={handleChange}
              className="input"
            />
          </div>
  
          <div className="form-group">
            <label className="label">Image</label>
            <input
              type="file"
              value={user.image}
              name="image"
              onChange={handleChange}
              className="input"
            />
          </div>
  
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
      </div>
    );

}

export default SignUp