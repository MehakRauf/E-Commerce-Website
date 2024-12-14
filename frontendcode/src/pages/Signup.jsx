import React from 'react'
import './Signup.css'
import { BiHide, BiShow } from "react-icons/bi";
import { toast } from 'react-hot-toast';
import gif from '../assets/login-animation.gif'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
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
    const handleShowConfirmPassword = () => {
        setConfirmShowPassword(prev => !prev);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, password, confirmPassword, email } = data;
        if (firstName && lastName && password && confirmPassword && email) {
            if (password != confirmPassword) {
                alert("Password and confirm password are not same!");
            }
            else {
                const fetchData = await fetch("http://localhost:8080/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                const data1 = await fetchData.json();
                toast(data1.message);
                if (data1.alert) {
                    navigate("/login")
                }
            }
        }
        else {
            alert("Enter all required fields!")
        }
    }
    return (
        <div className='main'>
            <div className="contain-all">
                <div className='container-img'>
                    <img src={gif} className="gif" alt="" />
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="firstName">FirstName</label>
                    <input type="text" name="firstName" id='firstName' value={data.firstName} onChange={changeHandler} />
                    <label htmlFor="lastName">LastName</label>
                    <input type="text" name="lastName" id='lastName' value={data.lastName} onChange={changeHandler} />
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
                    <div className='pass-container'>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <span >
                            <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" id='confirmPassword' value={data.confirmPassword} onChange={changeHandler} />
                            <span onClick={handleShowConfirmPassword}>{
                                showConfirmPassword ? <BiShow /> : <BiHide />
                            }</span>
                        </span>
                    </div>
                    <button>Sign Up</button>
                </form>
                <p className='account'>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Signup