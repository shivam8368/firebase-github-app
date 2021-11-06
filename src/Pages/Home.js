import React, { useState, useContext } from "react";
import Axios from "axios";
import '../Layout/Layout.css';

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import UserCard from "../Components/UserFile";
import Repos from "../Components/Repos";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";
import NavBar from "../Layout/NavBar"
import { Link } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';


import '../App.css';





const Home = () => {

    const context = useContext(UserContext); 
    const [quary ,setQuary] = useState('');
    const [user, setUser] = useState(null);



    const fetchDetails = async () => {
        try {
            const {data} = await Axios.get(`https://api.github.com/users/${quary}`);
            setUser(data)
            toast("Scroll Down to See Your Profile. " , {type: "success"})

        } catch (eror) {
            toast("Not able to locate the user", {type : "error"})
        }
    }


   
    return (
    <div fluid className="body-style ">
        <NavBar/>


      <Container className= "centered" >
        <GitHubIcon fontSize = 'large' style= {{marginLeft: "330", marginBottom: "40" , fontSize: "100"}}/>

          <InputGroup style={{width: "50rem"}}>
            <Input
              type="text"
              value={quary}
              onChange ={e => setQuary(e.target.value)}
              placeholder="Please provide the username"
             
            />
            <InputGroupAddon addonType="append">
              <Button onClick={fetchDetails} color="primary">Fetch User</Button>
            </InputGroupAddon> 
          </InputGroup>

         
          <div className = "button-style">
          {context.user?.uid ? (
            
            <Button tag={Link} to="Jobs" > Click to see jobs </Button>
            
          ) :(
            
            <Button tag={Link} to="SignIn" > sign in to see jobs </Button>
          ) }
          
          </div>

           </Container>
          
           
            <Row className = "mtb-1 " style={{justifyContent: "center"}}>
        <Col md="4" className= "ml-6">{user ? <UserCard user={user}/> : null}</Col> 
        <Col md="6" className = "mt-3 mb-3 ml-6">{user ? <Repos repos_url={user.repos_url}/> :null}</Col>
           </Row>
      
     

    </div>
  );
}

export default Home;