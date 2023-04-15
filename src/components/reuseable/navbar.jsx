import { Link, useNavigate } from "react-router-dom";
import "./styles/navbar.css";
import Popup from "./popup";
import SignUp from "../services/auth/signUp";
import { useEffect, useState } from "react";
import CreatePost from "../services/database/createPost";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../services/firebase';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [createPost, setCreatePost] = useState(false);
  const [isLogin,setLogin]=useState(false);
  const [user, setUser] = useState(null);
  const [userName, setName] = useState("");
  const navigate= useNavigate();

  const userSignOut=()=>{
    signOut(auth)
      .then(()=>{
        console.log("Sign Out!")
        navigate('/');
        window.location.reload()
      }).catch(err=>{
        console.log("kuch nahi")
        console.log(err.message)
      })
  }

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setName(user.displayName);
        setUser(user)
        setLogin(true);
        navigate('/feed');
      }else{
        setUser(null);
        setLogin(false)
        console.log("no user")
      }
    })
  },[auth])
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
        <Link to="/feed" onClick={() => setCreatePost(true)}>
          Create post
        </Link>
        {!isLogin && 
        <Link to="/" onClick={() => setButtonPopup(true)}>
          Sign Up
        </Link>
        }
        <Link to="#">
        {isLogin && 
          <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" onClick={userSignOut}>
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
        }
        </Link>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <SignUp />
      </Popup>
      <Popup trigger={createPost} setTrigger={setCreatePost}>
        <CreatePost />
      </Popup>
    </div>
  );
};

export default Navbar;
