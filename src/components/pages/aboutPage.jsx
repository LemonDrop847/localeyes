import "./styles/aboutpage.css";

const About = () => {
  return (
    <>
      <h1> COMMUNITY-LED, PEOPLE-POWERED. </h1>
      <div className="aboutusContent">
        <p>
          Small in size but mighty in purpose. LocalEyes is a team of determined problem-solvers who aim to address issues at their core.
          Whether it's a problem with infrastructure, environmental concerns, or community safety, LocalEyes is here to support users every step of the way. 
          We believe that everyone has a role to play in creating positive change in their communities, and we are committed to helping every citizen achieve that goal.
          We’ve worked hard to build a company where we do big things. We’re here to help you do the same.
        </p>
      </div>
      <h2> THE TEAM </h2>
      <div className="teamContainer">
        <div className="cards">
          <div className="content">
            <div className="imgBox">
              <img src="https://i.postimg.cc/tRrFP53M/IMG-20230414-165917.jpg" alt="profile"/>
            </div>
            <div className="contentBox">
              <h4>Nitin Mishra</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="teamContainer">
        <div className="cards">
          <div className="content">
            <div className="imgBox">
              <img src=" https://i.postimg.cc/MHh7B6CY/anil.jpg" alt="profile" />
            </div>
            <div className="contentBox">
              <h4>Anil Kumar Behera</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="teamContainer">
        <div className="cards">
          <div className="content">
            <div className="imgBox">
              <img src="https://i.postimg.cc/7ZzBmcX6/meeee.jpg" alt="profile" />
            </div>
            <div className="contentBox">
              <h4>Srusti Prusty</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="teamContainer">
        <div className="cards">
          <div className="content">
            <div className="imgBox">
              <img src="https://i.postimg.cc/3RKQMpxP/IMG-20230304-104403-1.jpg" alt="profile"/>
            </div>
            <div className="contentBox">
              <h4>Soyam Prabha Mallick</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
