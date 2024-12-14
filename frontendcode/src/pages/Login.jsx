import React from 'react'
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginReducer } from '../redux/userSlice';
import gif from '../assets/login-animation.gif'
import '../../src/index.css'
import './Login.css'
import { toast } from 'react-hot-toast';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(state => state.users);
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  })
  const handleClick = () => {
    setShowPassword(prev => !prev);
  }
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, email } = data;

    if (password && email) {
      const fetchData = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const data1 = await fetchData.json();
      toast(userData.firstName + data1.message);

      if (data1.alert) {
        dispatch(loginReducer(data1));
        navigate("/");
      }
    } else {
      alert("Enter all required fields!");
    }
  };
  return (
    <div className='main'>
      <div className="contain-all">
        <div className='container-img'>
          <img src={gif} className="gif image" alt="" />
        </div>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id='email' value={data.email} onChange={changeHandler} />
          <div className='pass-container'>
            <label htmlFor="password">Password</label>
            <span >
              <input type={showPassword ? "text" : "password"} name="password" id='password' value={data.password} onChange={changeHandler} />
              <span onClick={handleClick}> {
                showPassword ? <BiShow /> : <BiHide />
              }</span>
            </span>
          </div>
          <button>Login</button>
        </form>
        <p className='account'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login