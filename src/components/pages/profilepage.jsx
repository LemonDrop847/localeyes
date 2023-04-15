import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/profilepage.css";
import CardList from "../reuseable/cardList";

const Profile = () => {
  const [data, setData] = useState(null);
  return (
    <div className="profilepage">
      <div className="bgimg">
        <img src="https://i.postimg.cc/brwPLfNx/image-3.png" alt="background" />
      </div>
      <div className="stuff">
        <div className="details">
          <div className="image">
            <img
              src="https://i.postimg.cc/T3bG4yR8/licensed-image.jpg"
              alt="Profileimage"
            />
          </div>
          <div className="name">
            <h1>data.Name</h1>
          </div>
          <div className="other">
            <h4>data.location</h4>
            <h4>data.email</h4>
          </div>
        </div>
        <CardList sort="timestamp" type="all"/>
      </div>
    </div>
  );
};

export default Profile;
