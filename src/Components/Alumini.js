import React,  { useState } from "react";
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import "./Alumini.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import BgCircles from "./BgCircles";
import NavBar from "./NavBar";
import {FaPlus , FaSearch} from "react-icons/fa";


const SearchBtn = () => {
  const [state, setstate] = useState(false);
  const [d,setD] = useState(false);
  const [y,setY] = useState(false);
  const display = () =>{
    setstate(!state)
  }

  const Domain = ()=>{
    setD(!d);
  }

  const Year = ()=>{
    setY(!y);
  }

  return (
   <>
    

    <div className={`sBox`}>

       <span className="s" onClick={display}>
         <FaSearch className="ss"/>
      </span>

      <span className={`${state}`}>
      <input type="text" className="name" placeholder="Search by name" />
      <span className="domain">
        Domain
        <FaPlus className="plus" onClick={Domain}/>
        <div className={`doptn ${d}`}>
          <div>
            <label htmlFor="prog">Programming</label>
            <input id="prog" type="radio" value="Programming" name="domain" />
          </div>
          <div>
            <label htmlFor="elex">Electronics</label>
            <input id="elex" value="Electronics" type="radio" name="domain" />
          </div>
          <div>
            <label htmlFor="mech">Mechanical</label>
            <input value="Mechanical" id="mech" type="radio" name="domain" />
          </div>
          <div>
            <label htmlFor="admin">Admin</label>
            <input value="admin" id="admin" type="radio" name="domain" />
          </div>
        </div>
      </span>
      <span className="domain">
        Batch
        <FaPlus className="plus" onClick={Year}/>
        <div className={`doptn ${y}`}>
          <div>
            <label htmlFor="prog">Programming</label>
            <input id="prog" type="radio" value="Programming" name="domain" />
          </div>
          <div>
            <label htmlFor="elex">Electronics</label>
            <input id="elex" value="Electronics" type="radio" name="domain" />
          </div>
          <div>
            <label htmlFor="mech">Mechanical</label>
            <input value="Mechanical" id="mech" type="radio" name="domain" />
          </div>
          <div>
            <label htmlFor="admin">Admin</label>
            <input value="admin" id="admin" type="radio" name="domain" />
          </div>
        </div>
      </span>

       <button className="btn domain">SEARCH</button>
      </span>
     
    </div>
   </>
  );
    
};

const Item = () => {
  return (
    <>
      <tr className="imp">
        <td className="one">
          <span className="p">utytdytd yfutdrsres gcytu irdyft</span>
        </td>
        <td>Multimedia</td>
        <td>2022</td>
        <td className="test">
          <a href="/" className="iconsAlumni">
            <AiFillLinkedin />
          </a>
          <a href="/" className="iconsAlumni">
            <AiOutlineMail />
          </a>
          <a href="/" className="iconsAlumni">
            <AiOutlineGithub />
          </a>
        </td>
      </tr>
    </>
  );
};

class Alumini extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="aluminiBox">
          <SearchBtn />

          <div className="col-sm-12 text-center headAlumni">
            <h1>OUR ESTEEMED ALUMNI</h1>
          </div>

          <table>
            <thead className="header">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Domain</th>
                <th scope="col">Batch</th>
                <th scope="col">Connect</th>
              </tr>
            </thead>
            <tbody>
              <Item className="item" />
              <Item />
              <Item />
              <Item />
              <Item />
            </tbody>
          </table>
        </div>

        <BgCircles />
        <Footer />
      </>
    );
  }
}

export default Alumini;
