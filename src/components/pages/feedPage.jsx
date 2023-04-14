import'./styles/feedpage.css'
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import { onSnapshot, collection, orderBy } from "firebase/firestore";
import {db} from "../services/firebase"
import PostCard from '../reuseable/postCards';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(
        collection(db, "posts"),
        orderBy("timestamp", "desc"),
        (snapshot) => {
            const newPosts = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
            setPosts(newPosts);
        }
        );
        return unsubscribe;
    }, []);
    return (  
        <> 
        <h1> RECENT OCCURENCES IN YOUR AREA </h1>
        <Form className="d-flex searchbar">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
        <div className="row">
        {posts.map((post) => (
            <div className="col-3 postCard">
            <PostCard key={post.id} posts={posts}/>
            </div>
        ))}
        </div>
        </>
    );
}
 
export default Feed;