import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {auth,db} from '../firebase'
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
// import { doc, setDoc } from 'firebase/firestore';

const SignIn = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const provider=new GoogleAuthProvider();
    const navigate= useNavigate();
    
    const signUpGoogle=()=>{
      signInWithPopup(auth, provider)
      .then(() => {
          console.log("Logged in successfully")
          navigate('/');
      }).catch((error) => {
        console.log(error.message);
      });
    }

    const signIn=()=>{
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          console.log(user);
          console.log("user logged in successfully")
          navigate('/');
        })
        .catch((error) => {
          console.log(error.message)
        });
    }
    
    return ( 
        <div className="container">
            <form onSubmit={signIn}>
                <h1>Login To Your Account</h1>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='Email' />
                <br />
                <label>Password:</label>
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder='Password'/>
                <br />
                <button type='submit'>Sign In</button>
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
 
export default SignIn;