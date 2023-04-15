import React from "react";
import { Link } from "react-router-dom";
import "./styles/card.css";

const Card = ({ post }) => {
  const { id } = post;

  return (
    <div className="myPost">
      <div className="card-container">
        <div className="image-container">
          <img alt="problemimage" src={post.images[0]} />
        </div>
        <div className="cardcontent">
          <div className="card-title">
            <h3>{post.name}</h3>
            <h6>{post.type}</h6>
          </div>
          <div className="card-body">
            <p>{post.caption}</p>
          </div>
        </div>
        <div className="btn">
          <button>
            <Link to={`/details/${id}`}>View More</Link>
          </button>
        </div>
        <div className="status-of-post">
          <p>{post.likes} likes</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
