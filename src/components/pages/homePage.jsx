import "./styles/homepage.css";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Popup from "../reuseable/popup";
import CardList from "../reuseable/cardList";
import SignUp from "../services/auth/signUp";

const Home = () => {
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [post1, setPost1] = useState(false);
  const [post2, setPost2] = useState(false);
  const [post3, setPost3] = useState(false);
  const [post4, setPost4] = useState(false);
  const [post5, setPost5] = useState(false);
  const [post6, setPost6] = useState(false);
  const [post7, setPost7] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <div>
      <div className="img"></div>
      <div className="right">
        <div className="title">LocalEyes</div>
        <div className="sub_title">
          <p>Get involved, stay informed,</p>
          Make a difference
        </div>
        {user && (
          <div className="btns">
            <button onClick={() => navigate("/feed")}>Feed</button>
          </div>
        )}
        {!user && (
          <div className="btns">
            <button onClick={() => setPopup(true)}>Join Us</button>
          </div>
        )}
      </div>

      <section>
        <h1> TOP ISSUES TO BE ADDRESSED </h1>
        <div className="table">
          <div className="table-cell">
            <ul className="leader">
              <li onClick={() => setPost1((prevState) => !prevState)}>
                <span className="list_num">1</span>
                <h2>
                  Electrical Issues<span className="number">9,735</span>
                </h2>
              </li>
              {post1 && (
                <div style={{position:"relative",height:'500px', overflowY:"hidden"}}>
                  <CardList type="electrical" user="all" sort="likes" />
                </div>
              )}
              <li onClick={() => setPost2((prevState) => !prevState)}>
                <span className="list_num">2</span>
                <h2>
                  Water Problems<span className="number">8,364</span>
                </h2>
              </li>
              {post2 && (
                <div style={{position:"relative",height:'500px', overflowY:"hidden"}}>
                  <CardList type="water" user="all" sort="likes" />
                </div>
              )}
              <li onClick={() => setPost3((prevState) => !prevState)}>
                <span className="list_num">3</span>
                <h2>
                  Housing<span className="number">7,621</span>
                </h2>
              </li>
              {post3 && (
                <div style={{position:"relative",height:'500px', overflowY:"hidden"}}>
                  <CardList type="housing" user="all" sort="likes" />
                </div>
              )}
              <li onClick={() => setPost4((prevState) => !prevState)}>
                <span className="list_num">4</span>
                <h2>
                  Sanitation<span className="number">4,582</span>
                </h2>
              </li>
              {post4 && (
                <div style={{position:"relative",height:'500px', overflowY:"hidden"}}>
                  <CardList type="sanitation" user="all" sort="likes" />
                </div>
              )}
              <li onClick={() => setPost5((prevState) => !prevState)}>
                <span className="list_num">5</span>
                <h2>
                  Public safety<span className="number">4,582</span>
                </h2>
              </li>
              {post5 && (
                <div style={{position:"relative",height:'500px', overflowY:"hidden"}}>
                  <CardList type="public safety" user="all" sort="likes" />
                </div>
              )}
              <li onClick={() => setPost6((prevState) => !prevState)}>
                <span className="list_num">6</span>
                <h2>
                  Food<span className="number">4,582</span>
                </h2>
              </li>
              {post6 && (
                <div style={{position:"relative",height:'500px', overflowY:"hidden"}}>
                  <CardList type="food" user="all" sort="likes" />
                </div>
              )}
              <li onClick={() => setPost7((prevState) => !prevState)}>
                <span className="list_num">7</span>
                <h2>
                  Others<span className="number">4,582</span>
                </h2>
              </li>
              {post7 && (
                <div style={{position:"relative",height:'500px', overflowY:"hidden"}}>
                  <CardList type="other" user="all" sort="likes" />
                </div>
              )}
            </ul>
          </div>
        </div>
      </section>
      <Popup trigger={popup} setTrigger={setPopup}>
        <SignUp />
      </Popup>
    </div>
  );
};

export default Home;
