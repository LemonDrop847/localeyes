import { Link } from "react-router-dom";
import "./styles/navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [popup,setPopup] =useState(false);
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <img
            src="https://i.postimg.cc/yYTcM9K6/Screenshot-2023-04-14-190357-removebg-preview.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="links">
        <Link to="/about">About us</Link>
        <Link to="/feed">Create post</Link>
        <Link to="/">Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
