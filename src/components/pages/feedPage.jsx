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
        //<div className="row">
        //{posts.map((post) => (
        //    <div className="col-3 postCard">
        //    <PostCard key={post.id} posts={posts}/>
        //    </div>
        // ))}
        //</div>
            <div className="cardcontent">
            <div className="card-title">
              <h3>Soyam Prabha</h3>
            </div>
            <div className="card-body">
            <p> " Recently due to these potholes a bike fell in front of my car and I almost went over his arm. It was a tragic incident but luckily I was able to hit the brakes in my car.  I would be grateful this issue is rectified. " </p>
            </div>
            </div>
            <div className="btn">
                <button>
                    <a>View More</a>
                </button>
            </div>
            <div className="status-of-post">
                <p> #1 trending </p>
            </div>

        </div>  
    
        </>
    );
}
 
export default Feed;
