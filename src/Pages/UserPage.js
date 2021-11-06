import React, { useContext } from 'react';
import {UserContext} from '../Context/UserContext';
import { Container, Row, Col } from "react-bootstrap";
import Repos from '../Components/Repos';
import UserCard from '../Components/UserFile'

const UserPage = ( ) => {
    const context = useContext(UserContext);

    return(
        <Container>
        <Row className = "mt-3">
        <Col md="4" className= "ml-6">{context.user ? <UserCard user={context.user}/> : null}</Col> 
        <Col md="6" className = "mt-3 mb-3 ml-6">{context.user ? <Repos repos_url={context.user?.repos_url}/> :null}</Col>
      </Row>
        </Container>
    );

};

export default UserPage;