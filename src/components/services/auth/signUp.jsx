import {auth,db} from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import {GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import Popup from '../../reuseable/popup';
import SignIn from './signIn';

const SignUp = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const signUpGoogle = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        setName(user.displayName);
        setEmail(user.email);
        setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          location: "",
          posts: [],
        });
        console.log("Sign Up done");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

    const signUp=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then(()=>{
            updateProfile(auth.currentUser,{
                displayName: name, photoURL: "https://i.postimg.cc/NG7RsZCV/user-1.png"
            })
            .then(() => {
                setDoc(doc(db, "users", auth.currentUser.uid), {
                  name: name,
                  email: email,
                  photoURL: "https://i.postimg.cc/NG7RsZCV/user-1.png",
                  location:location,
                  posts:[]
                });
                console.log("added email: " + email);
                console.log("displayName set: " + name);
                console.log("user created successfully");
                navigate('/');
            });
        })
          .catch(err=>{
            console.log(err.message);
          })
    }
    return ( 
        <div className="container" style={{ width:"100%", padding:"0"}}>
            <form onSubmit={signUp}>
                <h1 style={{fontSize:"25px"}}>Sign Up to Your Account</h1>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required placeholder='Your Name' />
                <br />
                <label>Email:</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='Email' />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder='Password'/>
                <br />
                <label>Location:</label>
                <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)} required placeholder='Location'/>
                <br />
                <button type='submit' className="subm" style={{width:"75px", height:"40px"}}>Sign Up</button>
                <br />
                <span>Already an user?</span>
                <a href="#" onClick={()=>setButtonPopup(true)} style={{color:"black", fontSize:"10px", marginLeft:"5px"}}> Click here </a>
            </form>
            <h4>Or</h4>
            <span >Sign Up using &nbsp;
            <img style={{maxWidth:"20px",maxHeight:"20px"}} onClick={signUpGoogle} src="https://i.postimg.cc/VkYvZMZJ/search.png" alt="" />
            </span>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <SignIn/>
            </Popup>
        </div>
     );
}
 
export default SignUp;
