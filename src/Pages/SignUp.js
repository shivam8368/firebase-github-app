import React, { useState, useContext} from 'react';
import {
    Container,
    Form,
    Button,
    FormGroup,
    Label,
    Col,
    Input,
    Row,
  
} from 'reactstrap';

import firebase from "firebase/app";
import {UserContext} from "../Context/UserContext";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import '../Layout/Layout.css';



const SignUp = () => {

    const context = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSignUp = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then( res => {
            console.log(res)
            context.setUser({email: res.user.email, uid: res.user.uid})
        })
        .catch(error => {
            console.log(error)
            toast(error.message, {type: "error"}) 

        } )

    }

    const handleSubmit = e => {
        e.preventDefault()
        handleSignUp()
    }

   if (context.user?.uid) {
       return <Redirect to = '/' />
   }
   return (
	   <div className="body-style sign-style">
		<Container className='text-center'>
			<Row>
				<Col lg={6} className='offset-lg-3 mt-5'>
					<h2>SignUp Here</h2>
						<Form onSubmit={handleSubmit} style= {{paddingTop: "2rem"}}>
								<FormGroup row>
									<Label for='email' sm={3}>
										Email
									</Label>
									<Col sm={9}>
										<Input
											type='email'
											name='email'
											id='email'
											placeholder='provide your email'
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for='password' sm={3}>
										Password
									</Label>
									<Col sm={9}>
										<Input
											type='password'
											name='password'
											id='password'
											placeholder='your password here'
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
									</Col>
								</FormGroup>
								<Button type="submit" variant="outlined" color="primary" style= {{width: "32rem", marginLeft:"2rem"}}>
									Sign Up
								</Button>
						</Form>
				</Col>
			</Row>
		</Container>
		</div>
	);


}

export default SignUp;