import'./styles/feedpage.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Feed = () => {
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
        <div className='card-container'>
            <div className="image-container">
            <img src='https://i.guim.co.uk/img/media/975f39c09487ba67e9c6fd1ccc2c1929ed16d63c/760_10_4148_2491/master/4148.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=85ed0733ca5e3f6d881227dbb9b4be79'/>
            </div>
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