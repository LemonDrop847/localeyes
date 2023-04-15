import { Link, useNavigate } from "react-router-dom";
import "./styles/navbar.css";
import Popup from "./popup";
import SignIn from "../services/auth/signIn";
import { useState, useEffect } from "react";
import CreatePost from "../services/database/createPost";
import { auth } from "../services/firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [createPost, setCreatePost] = useState(false);
  const [isLogin,setLogin]=useState(false);
  const [user, setUser] = useState(null);
  const [userName, setName] = useState("");
  const navigate= useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

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

  // useEffect(()=>{
  //   onAuthStateChanged(auth,(user)=>{
  //     if(user){
  //       setName(user.displayName);
  //       setUser(user)
  //       setLogin(true);
  //       navigate('/feed');
  //     }else{
  //       setUser(null);
  //       setLogin(false)
  //       console.log("no user")
  //     }
  //   })
  // },[auth])
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
