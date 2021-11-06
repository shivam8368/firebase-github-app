import React from 'react'
import under_construction from "../Media/under_construction.png";
import { Parallax, Background } from 'react-parallax';
import { Container } from "reactstrap";
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';





const Blog = () => {
    return (
        <div>
         <div className = "parallex-div">
      <Parallax bgImage={under_construction} className = "inlineStyle" style={{height:700}} >
          
        <NavBar/>

        <Container className=" header-style" >
            <h3>Hang On Tight..... </h3>
            <h4>WE are building Something Awesome..</h4>
        </Container>
        </Parallax>
        </div>
        <Footer/>

    
        </div>
    )
};


export default  Blog;
