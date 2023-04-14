import "./styles/homepage.css"
import Navbar from "../reuseable/navbar";

const Home = () => {
    return (  
        <div>
            <Navbar/>
           {/* <nav>
    <div className="menu">
      <div className="logo">
        <img src="#" className="img1">
      </div>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Statistics</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </div>
  </nav>
   */}
  <div className="img"></div>
  <div className="right">
    <div className="title">LocalEyes</div>
    <div className="sub_title"><p>Get involved, stay informed,</p>
      Make a difference</div>
    <div className="btns">
      <button>Join Us</button>
    </div>  
</div>

<section>

<h1> TOP POSTS FOR BMC </h1>

<div className="table">
  <div className="table-cell">
    <ul className="leader">
      <li>
        <span className="list_num">1</span>
        <h2>Potholes<span className="number">9,735</span></h2>
      </li>
      <li>
        <span className="list_num">2</span>
        
        <h2>Increasing Robbery<span className="number">8,364</span></h2>
      </li>
      <li>
        <span className="list_num">3</span>
        
        <h2>Public Toilet Maintainance <span className="number">7,621</span></h2>
      </li>
      <li>
        <span className="list_num">4</span>
        
        <h2>Leaking pipes<span className="number">4,582</span></h2>
      </li>      
    </ul>
  </div>
</div>
</section>

</div>
    );
}
 
export default Home;