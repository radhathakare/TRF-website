import "./Projects.css";
import React, { useState  } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import BgCircles from './BgCircles';

const Tags = () => {
  return (
    <div className="tags">
      <span className="tag">#Android</span>
      <span className="tag">#Android</span> 
    </div>
  );
}
 
const ProjectInfo = () =>{
  const [hide,setHide] = useState("hide");

  const show = () => {
    if(hide==="hide"){
      setHide("display") 
    }
    else{
      setHide("hide")
    }
  }
  return (
    <>
      <h2 className="project-title">Real Chat</h2>
      <h3 className="project-sub-title">Online real time chat app.</h3>
      <p className="project-desc text-justify">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's sta ok a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typeset
      </p>

      <p className={`${hide} project-desc text-justify`}>Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's sta ok a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetLorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's sta ok a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typeset</p>
      <Tags />

      <div className="buttons">
        <button onClick={show} style={{ color: "white" }} className="primary-btn">
          Know More
        </button>
        <a href="/" className="primary-btn outline external-link">
          {" "}
          <span>
            <small>Preview</small>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </>
  );
} 

const Image = () => {
  return (
    <div className="img">
      <img className="img img-fluid"
        src="https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="project"
      />
    </div>
  );
};

const Card = () => {
  return (
    <div className="item">
      <div className="left">
        <Image />
      </div>
      <div className="right">
        <ProjectInfo /> 
      </div>
    </div>
  );
}
  
function Projects() {
  return (
    <>
    <BgCircles />
    <NavBar />

    <div className="pbox">
      <section id="projects">
        <div className="container">
          <h2 className="section-heading" data-outline="Projects">
            Projects
          </h2>
          <div className="all-items">        
            
             <Card />
             <Card />
             <Card />

          </div>
        </div>
      </section>
    </div>

    <Footer />

    </>
  );
}

export default Projects;