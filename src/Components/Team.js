import React, { useState, useEffect } from 'react'; 
import './Team.css'; 
import { FaLinkedin , FaFilter , FaEnvelope , FaGithub  } from 'react-icons/fa'  
import NavBar from './NavBar';
import Loader from './Loader';
import Error500 from './Error500';
import Footer from './Footer'; 
import BgCircles from './BgCircles';
import { Link } from "react-scroll";
const url = 'https://trfbackend.herokuapp.com/all-members';
 

const Header = (props) =>{
  return (
  <h1 className="domainTeam">{props.domain}</h1>
  );
}

const Card = (props)=>{ 
const {name, role} = props.user ;
  return (
      <div className="cardTeam">
              <div className="contentTeam">
                  <div className="imgBxTeam"><img src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="user profile" />
                  </div>
                  <div className="contentBxTeam">
                      <h3> {name} <br/> <span> {role}  </span> </h3>
                  </div>
              </div>
          
              <ul className="sciTeam">
                  <li style={{"--i":1}}>
                      <a href="/">
                         <FaLinkedin />
                      </a>
                  </li>
                  <li style={{"--i":2}}>
                      <a href="/">
                         <FaGithub />
                      </a>
                  </li>
                  <li style={{"--i":3}}>
                      <a href="/">
                        < FaEnvelope />
                      </a>
                  </li>
              </ul>
          </div>
  )
};

const Domain = (props) => {
const {domain,members} = props;
let i = 0;
return( 
  <section className="cbox">
    <div className="containerTeam"> 
      <Header domain={domain} />
      { members.map((user) => {
          return ( 
            <Card key={i++} user={user}/>  
          );
        })
      }; 
    </div>
  </section>
);
} 
 

const FilterBtn = () => {
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
    <React.Fragment>
       <div className="filterBtnTeam" id="filterBtn">
            <button onClick={show}>
              <FaFilter />
            </button>
        </div> 
          
        <ul   className={`${hide} filterListTeam`} id="filterListTeam">
            <li>
                <a href="#programming">Programming</a>
               
                
            </li>
            <li>
                <a href="#electronics"  >Electronics</a>
                
                
            </li>
            <li>
                <a href="#mechanical">Mechanical</a>
            </li>
            <li>
                <a href="#admin">Admin</a>
            </li>
        </ul>
    </React.Fragment>
  )
}

 
const Team = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((data) => { 
        setData(data);
        //console.log(data)
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <> 
        <NavBar />
        <Loader />
      </>
    );
  }
  if (isError) {
    return (
      <Error500 />
    );
  }
  return (
    <>
    <NavBar />
    <div className="Team_Rel">
    <Link
    activeClass="active"
    domain="Programming"
     id="programming" 
    to="programming"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    members={data[0]}
></Link>
      <Domain domain="Programming" id="programming" members={data[0]} />
      
      <Link
    activeClass="active"
    domain="Electronics" 
    id="electronics"
    to="electronics"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    members={data[0]}
></Link>
      <Domain domain="Electronics" id="electronics" members={data[1]} />
      <Link
    activeClass="active"
    domain="Mechanical" id="mechanical"
    to="mechanical"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    members={data[0]}
></Link>
      <Domain domain="Mechanical" id="mechanical" members={data[2]} />
      <Link
    activeClass="active"
    domain="Admin" id="admin" 
    to="admin"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    members={data[0]}
></Link>
      <Domain domain="Admin" id="admin" members={data[3]} />
    </div>

    
    <FilterBtn />
     <BgCircles />
    <Footer />
 </>
  );
} 

export default Team;