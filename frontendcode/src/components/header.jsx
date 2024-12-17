import React, { useState, useRef } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutReducer } from '../redux/userSlice';
import logo from '../assets/logo.png';
import './header.css';
import toast from 'react-hot-toast';

const Header = () => {
    const dropdownRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false);
    const userData = useSelector(state => state.users);
    const dispatch = useDispatch();
    const toggleMenu = () => {
        setShowMenu(prev => !prev);
    };
    const handleLogOut = () => {
        dispatch(logoutReducer());
        toast("Logged out successfully!");
    }

    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
                <div className="data">
                    <Link to="/">
                        <p className="text">Home</p>
                    </Link>
                    <Link to="menu/675d8d83ad92a3d27c1ee5f5">
                        <p className="text">Menu</p>
                    </Link>
                    <Link to="about">
                        <p className="text">About</p>
                    </Link>
                    <Link to="contact">
                        <p className="text">Contact</p>
                    </Link>
                </div>
                <div className="icon-container">
                    <div className="icons">
                        <div>
                            <FaCartArrowDown className="icon" />
                        </div>
                        <span className="dot"></span>
                        <div onClick={toggleMenu}>

                            <div >
                                <IoMdContact className="icon" />
                            </div>
                            <div>
                                {showMenu && (
                                    <div className="dropdown" ref={dropdownRef}>
                                        {userData.email == "mehak.fatima2386@gmail.com" && <Link to="newproduct">New Products</Link>}
                                        {userData.email ? <p className="logout" onClick={handleLogOut}>Log out ({userData.firstName})</p> : <Link to="login">Login</Link>}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
