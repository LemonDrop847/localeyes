import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignUp from "./signUp";
import Popup from "../../reuseable/popup";
// import { doc, setDoc } from 'firebase/firestore';

const SignIn = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const signUpGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        console.log("Logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log("user logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="container">
      <form onSubmit={signIn}>
        <h1>Login To Your Account</h1>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />
        <br />
        <button type="submit" className="subm">
          Sign In
        </button>
        <br />
        <span>New user?</span>
        <a href="#" onClick={() => setButtonPopup(true)} style={{color:"black", fontSize:"15px"}}>
          Click here
        </a>
      </form>

      <h4>Or</h4>
      <span>
        Log In using &nbsp;
        <img
          style={{ maxWidth: "25px", maxHeight: "25px" }}
          onClick={signUpGoogle}
          src="https://i.postimg.cc/VkYvZMZJ/search.png"
          alt=""
        />
      </span>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <SignUp />
      </Popup>
    </div>
  );
};

export default SignIn;
