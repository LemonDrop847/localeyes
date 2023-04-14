import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>Logo Cool one</div>
      <div>
        <Link to="/">About us</Link>
        <Link to='/'>Create post</Link>
        <Link to='/'>Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
