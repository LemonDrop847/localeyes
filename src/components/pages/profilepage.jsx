import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/profilepage.css";
import CardList from "../reuseable/cardList";
import { auth, db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import Popup from "../reuseable/popup";
import UpdateProfile from "../services/auth/updateProfile";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [updateProf, setUpdateProf] = useState(false);
  const navigate = useNavigate();
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    const checkIfUserLoggedIn = setInterval(() => {
      if (auth.currentUser) {
        clearInterval(checkIfUserLoggedIn);

        const userRef = doc(db, "users", auth.currentUser.uid);
        getDoc(userRef)
          .then((doc) => {
            console.log("running");
            if (doc.exists) {
              setUser(doc.data());
            } else {
              console.error("User not found");
              alert("User Data Not Found");
              navigate("/");
            }
          })
          .catch((error) => {
            console.error("Error retrieving user data: ", error);
            alert("User Data Not Found");
            navigate("/");
          });
      }
    }, 500);

    setTimeout(() => {
      clearInterval(checkIfUserLoggedIn);
      if (!auth.currentUser) {
        console.error("User not logged in");
        alert("Login or Signup First");
        navigate("/");
      }
    }, 5000);
  }, [navigate]);

  return user == null ? (
    <p
      style={{
        height: "700vh",
      }}
    >
      Loading user data...
    </p>
  ) : (
    <div className="profilepage">
      <div className="bgimg">
        <img src="https://i.postimg.cc/brwPLfNx/image-3.png" alt="background" />
      </div>
      <div className="stuff">
        <div className="details">
          <div className="image">
            <img src={user.photoURL} alt="Profileimage"/>
          </div>
          <div className="name">
            <h1>{user.name}</h1>
          </div>
          <div className="other">
            <h4>{user.location}</h4>
            <h4>{user.email}</h4>
            <button className='updateProf' onClick={() => setUpdateProf(true)}>
              Update Profile
            </button>
            <br />  
            <button className='signOut' onClick={userSignOut}>
              Sign Out
            </button>
          </div>
        </div>
        <div>
          <h1>My Posts</h1>
          <br />
          <CardList sort="timestamp" type="all" user={auth.currentUser.uid} />
        </div>
      </div>
      <Popup trigger={updateProf} setTrigger={setUpdateProf}>
        <UpdateProfile name={user.name} location={user.location} photoURL={user.photoURL} />
      </Popup>
    </div>
  );
};

export default Profile;
