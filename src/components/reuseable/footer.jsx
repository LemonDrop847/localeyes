import { Link } from "react-router-dom";
import "./styles/footer.css"


const Foot = () => {
  return (


 
<footer className="footer">
<div className="container">
    <div className="row">
        <div className="footer-col">
            <img src="https://i.postimg.cc/yYTcM9K6/Screenshot-2023-04-14-190357-removebg-preview.png"></img>
            <br/>
            <h4>Get involved, stay informed, make a difference.</h4>
        </div>
        <div className="footer-col">
            <h4>Our sponsors</h4>
            <ul>
                <li><a href="#">lemondrop</a></li>
                <li><a href="#">anilrockzz</a></li>
                <li><a href="#">srustihihihi</a></li>
                <li><a href="#">prosoy</a></li>
            </ul>
        </div>
        <div className="footer-col">
            <h4>Partners</h4>
            <ul>
                <li><a href="#">BMC</a></li>
                <li><a href="#">CMC</a></li>
                <li><a href="#">RMC</a></li>
            </ul>
        </div>
        <div className="footer-col">
            <h4>Contact Us</h4>
            <br/>
            <p>OUTR, Bhubaneswar</p>
        </div>
    </div>
</div>
</footer>
  );
};

export default Foot;
