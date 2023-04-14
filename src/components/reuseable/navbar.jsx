import { Link } from "react-router-dom";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <img
            src="https://i.postimg.cc/yYTcM9K6/Screenshot-2023-04-14-190357-removebg-preview.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="links">
        <Link to="/">About us</Link>
        <Link to="/">Create post</Link>
        <Link to="/">Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
