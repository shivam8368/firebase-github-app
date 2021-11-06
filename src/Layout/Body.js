import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import { Button } from '@material-ui/core';
import './Layout.css';
import body_search from "../Media/body_search.png";
import body_blog from '../Media/body_blog.png';
import { Link } from "react-router-dom" ;



const Body = () => {



    return (
        <div className= "body-style">
            <div>
                <h3 className="body-head">What's in here for you</h3>
            </div>
            <Row >
                <Col md={5}  xs= {12} className = "Card-style">
                    <Card  style={{ width: '22rem', height: '35rem'}}>
                        <Card.Img variant="top" src={body_blog} style={{height : "20rem"}} />
                        <Card.Body>
                            <Card.Title>Visit Our Blog</Card.Title>
                                <Card.Text>
                               Our awesome blog with powerful Content is Comming soon..
                                </Card.Text>
                            <Button component= {Link} to="Blog" variant="contained" color="inherit">Click me</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5} xs= {12} className = "Card-style">
                    
                    <Card style={{ width: '22rem', height: '35rem' }} >
                        <Card.Img variant="top" src={body_search} style={{height : "20rem"}}/>
                        <Card.Body>
                            <Card.Title>Github Jobs</Card.Title>
                                <Card.Text>
                                Find some awesome jobs offered by Github in your Location
                                </Card.Text>
                            <Button style={{textDecoration: "none"}} component ={Link} to="Home"  variant="contained" color="inherit">Click to Visit</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default  Body;