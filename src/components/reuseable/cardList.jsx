import { useState, useEffect } from "react";
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import Card from "./cards";
import "./styles/cardlist.css";

const CardList = ({ sort, type, user }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      let postsQuery;
      console.log(user);
      if (user !== "all") {
        postsQuery = query(
          collection(db, "posts"),
          where("user", "==", user),
          orderBy(sort, "desc")
        );
      } else {
        if (type === "all") {
          postsQuery = query(collection(db, "posts"), orderBy(sort, "desc"));
        } else {
          postsQuery = query(
            collection(db, "posts"),
            where("type", "==", type),
            orderBy(sort, "desc")
          );
        }
      }

      const querySnapshot = await getDocs(postsQuery);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(data);
    };
    fetchPosts();
  }, [sort, type, user]);

  return (
    <div className="card-list-container">
      {posts.length ? (
        posts.map((post) => <Card key={post.id} post={post} />)
      ) : (
        <p>No posts to display.</p>
      )}
    </div>
  );
};

export default CardList;
