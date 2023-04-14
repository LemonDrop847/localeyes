import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/profilepage.css";
import PostCard from "../reuseable/postCards";

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
        <div className="myPost">
          <div className="card-container">
            <div className="image-container">
              <img alt="problemimage" src="https://i.guim.co.uk/img/media/975f39c09487ba67e9c6fd1ccc2c1929ed16d63c/760_10_4148_2491/master/4148.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=85ed0733ca5e3f6d881227dbb9b4be79" />
            </div>
            <div className="cardcontent">
              <div className="card-title">
                <h3>Problem Info</h3>
              </div>
              <div className="card-body">
                <p>
                  {" "}
                  " Recently due to these potholes a bike fell in front of my
                  car and I almost went over his arm. It was a tragic incident
                  but luckily I was able to hit the brakes in my car. I would be
                  grateful this issue is rectified. "{" "}
                </p>
              </div>
            </div>
            <div className="btn">
              <button>
                <Link to='/details'>View More</Link>
              </button>
            </div>
            <div className="status-of-post">
              <p> #1 trending </p>
            </div>
          </div>
          {/* {data.posts.map((post) => (
          <div className="postCard">
            <PostCard key={post.id} post={post} />
          </div>
        ))} */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
