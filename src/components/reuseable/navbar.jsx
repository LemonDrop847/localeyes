import { Link } from "react-router-dom";
import "./styles/navbar.css";
import Popup from "./popup";
import SignIn from "../services/auth/signIn";
import { useState, useEffect } from "react";
import CreatePost from "../services/database/createPost";
import { auth } from "../services/firebase";

const Navbar = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [createPost, setCreatePost] = useState(false);
  const [user, setUser] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

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
        <Link onClick={() => setCreatePost(true)}>Create post</Link>
        <div className="user">
          {user && (
            <Link to="/profile">
              <img id="user" src={user.photoURL} alt="" />
            </Link>
          )}
          {!user && <Link onClick={() => setButtonPopup(true)}>Sign In</Link>}
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <SignIn />
      </Popup>
      <Popup trigger={createPost} setTrigger={setCreatePost}>
        <CreatePost />
      </Popup>
    </div>
  );
};

export default Navbar;
