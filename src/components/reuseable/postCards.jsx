
const PostCard = ({post}) => {
    
    return (
      <div className='card-container'>
            <div className="image-container">
            <img src={post.images[0]} alt="Post" style={{ maxWidth: "100%", maxHeight: "300px" }}/>
            </div>
            <div className="cardcontent">
            <div className="card-title">
              <h3>{post.name}</h3>
            </div>
            <div className="card-body">
            <p> {post.caption}</p>
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
    );
  };
  
  export default PostCard;
  