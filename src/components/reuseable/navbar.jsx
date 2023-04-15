import { Link } from "react-router-dom";
import "./styles/navbar.css";
import Popup from './popup';
import SignUp from "../services/auth/signUp";
import { useState } from "react";

const Navbar = () => {
  const [buttonPopup,setButtonPopup] =useState(false);

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
        <Link to="/" onClick={()=>setButtonPopup(true)}>Sign Up</Link>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <SignUp/>
      </Popup>
    </div>
  );
};

export default Navbar;
