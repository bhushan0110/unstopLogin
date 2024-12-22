import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import "./mainPage.css";

const MainPage = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
            console.log("INSIDE")
            localStorage.removeItem("authToken");
            navigate('/auth/login');
        };
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate('/auth/login');
        }
        }, [navigate]);

    return (
        <div className="profile-container">
        <p  style={{fontFamily:'Poppins, sans-serif', fontSize:'3rem', fontWeight:'550'}}>
            Welcome to <br /> <span className="brand-name">Unstop</span>
        </p>
        <div className="card">
            <img
            src="/mainPage/profile.png" // Replace with your image URL
            alt="Profile"
            className="profile-pic"
            />
            <h5 style={{fontFamily:'Poppins, sans-serif', fontWeight:'700'}} >Michael Dam</h5>
            <p style={{fontFamily:'Poppins, sans-serif', fontWeight:'550' }} >example@gmail.com</p>
            <p style={{fontFamily:'Poppins, sans-serif', fontWeight:'550' }} >Female</p>
            <button className="logout-btn" onClick={handleLogout} style={{fontFamily:'Poppins, sans-serif', fontWeight:'550'}}>
            Logout
            </button>
        </div>
        </div>
    );
};

export default MainPage;
