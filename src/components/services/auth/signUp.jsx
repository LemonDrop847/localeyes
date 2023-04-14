import {auth,db} from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import {GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { useState } from 'react';

const SignUp = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [location,setLocation]=useState("");
    const provider=new GoogleAuthProvider();
    const navigate= useNavigate();
    
    const signUpGoogle=()=>{
      signInWithPopup(auth, provider)
      .then(({user}) => {
        setName(user.displayName);
        setEmail(user.email);
        setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          location:"",
          posts:[]
        });
        console.log("Sign Up done")
        navigate('/');
      }).catch((error) => {
        console.log(error.message);
      });
    }

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
        <div className="container">
            <form onSubmit={signUp}>
                <h1>Sign Up to Your Account</h1>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required placeholder='Your Name' />
                <br />
                <label>Email:</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='Email' />
                <br />
                <label>Password:</label>
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder='Password'/>
                <br />
                <label>Location:</label>
                <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)} required placeholder='Location'/>
                <br />
                <button type='submit'>Sign Up</button>
            </form>
            <br />
            <div className="line"></div>
            <h2>Or</h2>
            <div className="line"></div>
            <span>Sign Up using</span>
            <img style={{maxWidth:"50px"}} onClick={signUpGoogle} src="https://i.postimg.cc/VkYvZMZJ/search.png" alt="" />
        </div>
     );
}
 
export default SignUp;