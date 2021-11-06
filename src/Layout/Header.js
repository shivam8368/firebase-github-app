import React from 'react'
import header_img from "../Media/img.png";
import { Parallax } from 'react-parallax';
import { Container, Row, Col } from "reactstrap";
import NavBar from './NavBar';
import Body from './Body';
import Footer from './Footer';
import "./style.css"
import { Link } from 'react-router-dom';





const Header = () => {
    return (
      <div>
       <NavBar />
       <Row className="main-body">
         <Col xs="6" className="main-btns">
                  <div className="btn-bg">
                     <div className="main-text">
                        <h1>Find some great opportunities </h1> 
                        <h1>around you </h1>
                        <h2>Advertised on Github.</h2>
                        <h5>sign up to see jobs based on your Github Profile. Or,</h5>
                     </div>

                      <Link to= "/Jobs"className="main-btn" href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Click To Visit Gihub Jobs Page
	                   </Link>
               </div>
         </Col>

         <Col xs="6" className="col-img">
            <div className="main-img">
               <figure><img src={header_img} /></figure>
            </div>
         </Col>
            

      </Row>

      
        {/* <Footer/> */}

      </div>
    
    )
};


export default  Header;
