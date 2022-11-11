import React from "react";
import "./Faculty.css";
import Carousel from "react-bootstrap/Carousel";

function Faculty() {
  return (
    <div className="faculty">

      <h2><span>Faculty Advisors</span></h2>

      <Carousel>
        <Carousel.Item interval={3000} className="sirDiv">
          <div className="profileImg" >
            <img className="d-block " src="https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGljc2FydCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"  alt="Second slide" /> 
            <p className="profileName">
              <b>Prof. Name Sirname</b>
              <p>Dean Academics VIT Pune</p>
            </p>
          </div>
          <div className="profileInfo px-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's th the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </Carousel.Item>
       
        <Carousel.Item interval={3000} className="sirDiv">
          <div className="profileImg" >
            <img className="d-block " src="https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGljc2FydCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"  alt="Second slide" /> 
            <p className="profileName">
              <b>Prof. Name Sirname</b>
              <p>Dean Academics VIT Pune</p>
            </p>
          </div>
          <div className="profileInfo px-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's th the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </Carousel.Item>
       
        <Carousel.Item interval={3000} className="sirDiv">
          <div className="profileImg" >
            <img className="d-block " src="https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGljc2FydCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"  alt="Second slide" /> 
            <p className="profileName">
              <b>Prof. Name Sirname</b>
              <p>Dean Academics VIT Pune</p>
            </p>
          </div>
          <div className="profileInfo px-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's th the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}

export default Faculty;
