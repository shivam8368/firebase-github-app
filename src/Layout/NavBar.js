import React, { useState, useContext} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavLink,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';

import { Link } from "react-router-dom" ;

import { UserContext } from "../Context/UserContext";


const NavBar = () => {

    const context = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar style = {{backgroundColor: "transperent"}} color="rgb(0,111,138)" light fixed="top" expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white" >
                    <span style ={{fontSize:"25px" , padding: "25px"}}>Git-Browse</span> 
                </Link>
            </NavbarBrand>
    <NavbarText className= "text-white">{
        context.user?.email  ? context.user.email : "" 
    }</NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav tabs className="ml-auto" navbar>
                    {
                        context.user ? ( 
                            <NavItem>
                                <NavLink tag={Link} onClick={() => (context.setUser(null))} className="text-white">LogOut</NavLink>
                            </NavItem>
                           
                        ) : (
                             <>
                             <NavItem>
                                <NavLink tag={Link} to="SignUp"  className="text-white">SignUp</NavLink>
                             </NavItem>
                             <NavItem>
                                <NavLink tag={Link} to= "SignIn" className="text-white">SignIn</NavLink>
                             </NavItem>
                            </>)
                    }
                   
                    
                </Nav>
            </Collapse>
        </Navbar>

    )


}
export default NavBar ;