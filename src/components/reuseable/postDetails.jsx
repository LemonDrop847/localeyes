import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import "./styles/postDetails.css";

const PostDetails = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const getPost = async () => {
      const postDoc = await getDoc(doc(db, "posts", postId));
      if (postDoc.exists()) {
        setPost({ id: postId, ...postDoc.data() });
        setLikes(postDoc.data().likes);
      } else {
        console.log("No such document!");
      }
    };

    getPost();
  }, [postId]);

  const handleLike = async () => {
    try {
      const postRef = doc(db, "posts", postId);
      await updateDoc(postRef, {
        likes: likes + 1,
      });
      setLikes(likes + 1);
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  if (!post) {
    return <p>Loading post...</p>;
  }

  return (
    // <div>
    //   <h2>{post.name}</h2>
    //   <p>{post.caption}</p>
    //   <div>
    //     {post.images.map((imageUrl, index) => (
    //       <img
    //         key={index}
    //         src={imageUrl}
    //         alt={`Post ${index}`}
    //         style={{ height: 100, width: 100 }}
    //       />
    //     ))}
    //   </div>
    //   <button onClick={handleLike}>Like ({likes})</button>
    // </div>

    <div id="ipost">
      <img src={post.images[0]} alt="problem-pic" />

      <div className="ipost-a">
        {/* <div className="iprofile"><div className="profim" style={{background: url("https://images2.imgbox.com/6d/f8/ZapuXuvR_o.png")}}></div></div> */}
        <div className="ipost-us">
          {post.name}  
          <br />
        </div>
        <div className="ipost-ds">
          <b>{post.username}</b> <br/> {post.caption}
        </div>
        <div className="ipost-sm">
          <br />
          <button onClick={handleLike}>Report again ({likes})</button>
          <p>{post.timestamp.toDate().toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
