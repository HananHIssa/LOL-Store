import React from "react";
import { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    image: "",
  });
  const [errors, setErrors] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSumbit = async (e) => {
    e.preventDefult();
    const valied = await validateData(user, { abortEarly: false });

    const FormData = new FormData();
    FormData.append("userName", user.userName);
    FormData.append("email", user.email);
    FormData.append("password", user.password);
    FormData.append("image", user.image);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API}/auth/signup`,
        FormData
      );
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setUser({
      ...user,
      [name]: files[0],
    });
  };
  const validateData = async (e) => {
    const RegisterSchema = object({
      userName: string().min(5).max(20).required(),
      email: string().email(),
      password: string().min(8).max(20).required(),
      image: string.required(),
    });
    try {
      await RegisterSchema.validateData(user);
      return true;
    } catch (error) {
      setErrors(error.errors);
      console.log("validation error", error.errors);
      return false;
    }
  };
  return (
    <div className="container">
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
              name="image"
              onChange={handleImageChange}
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

export default SignUp;
