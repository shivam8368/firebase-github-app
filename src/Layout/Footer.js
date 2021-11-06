import React from 'react';
import { Row, Col, Navbar, Nav} from 'react-bootstrap';
import './Layout.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {

    return(
        <div className = "footer-style">


            <Row>
                <Col md={4} xs={12} >
                     <Navbar.Brand href="#home" className = "brand-style">Git Browse</Navbar.Brand>
                </Col>
                <Col md={4} xs={12} >
                     <p className="text-center" style = {{marginBottom : -2 }}>Contact Us at:</p>
            
                    <Nav className="justify-content-center" style={{color : "#ffffff"}} activeKey="/home">
                            <Nav.Item>
                            <Nav.Link className= "nav-link" href="https://www.instagram.com/n0_n4m3______/">
                                <InstagramIcon />
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link href="https://www.linkedin.com/in/shivam-kushwaha-a4762b198/">
                                <LinkedInIcon />
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link href="https://github.com/shivam8368">
                                <GitHubIcon />
                            </Nav.Link>
                            </Nav.Item>
                        </Nav>
                </Col>
                <Col md={4} xs={12} >
                </Col>
            </Row>

           

        </div>
        
        
        
    )
}

export default Footer;