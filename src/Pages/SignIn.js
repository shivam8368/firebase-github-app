import React, {useState, useContext } from 'react';
import {
    Container,
    Form,
    FormGroup,
    Label,
    Col,
    Input,
    Row,
  
} from 'reactstrap';
import {Button} from "@material-ui/core";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {Link} from "react-router-dom";

import firebase from 'firebase/app';
import { UserContext } from "../Context/UserContext";
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../Layout/Layout.css'

const SignIn = () => {

    const context = useContext(UserContext);

    const [email ,setEmail] = useState("");
    const [password , setPassword] = useState("");


    const handleSignIn = () => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email , password)
        .then( res => {
            console.log.apply(res)
            context.setUser({email: res.user.email, uid: res.user.uid})
        })
        .catch(error => {
            console.log(error)
            toast(error.message, {type: "error"})
        })

	}
	

	const handleGoogleSignin = () => {
		var  base_provider = new firebase.auth.GoogleAuthProvider();

		firebase.auth().signInWithPopup(base_provider).then(function(result) {
			console.log.apply(result)
			context.setUser({email: result.user.email, uid:result.user.uid})
			
			}).catch(function(error) {
				console.log(error)
            	toast(error.message, {type: "error"})
			
});
}


	const handleFacebookSignin = () => {
	var base_provider = new firebase.auth.FacebookAuthProvider();


	firebase.auth().signInWithPopup(base_provider).then(function(result) {
			console.log.apply(result)
			context.setUser({email: result.user.email, uid:result.user.uid})
			
			}).catch(function(error) {
			console.log(error)
            toast(error.message, {type: "error"})
});
}


    const handleSubmit = e => {
        e.preventDefault()
        handleSignIn()
    }

    if (context.user?.uid) {
		console.log(context.user)
        return <Redirect to= '/Home' />
    }
    return (
		<div className="body-style sign-style">
		<Container className='text-center'>
			<Row>
				<Col lg={6} className='offset-lg-3 mt-5'>
					<h2>SignIn Here</h2>
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
									Sign In
								</Button>

								<Button onClick = {()=> {handleGoogleSignin()}} type="submit" variant="outlined" color="primary" style= {{width: "15rem", marginRight:"14rem", marginTop: "1rem"}}>
									<FcGoogle style ={{marginRight: "10"}}/>
									Sign In with Google

								</Button>


								<Button onClick = {() => {handleFacebookSignin()}} type="submit" variant="outlined" color="primary" style= {{width: "15rem", marginLeft:"18rem", marginTop: "-4rem"}}>
									<FaFacebook style ={{marginRight: "10"}}/>
									Sign In with Facebook

								</Button>

							<div style={{marginTop: "4rem"}}>
								<h2>OR</h2>
								<h4>Don't have an account...</h4>
								<Button component={Link} to= "SignUp" type="submit" variant="outlined" color="primary" style= {{width: "32rem", marginLeft:"2rem"}}>
									Sign Up Here
								</Button>
							</div>
						</Form>
				</Col>
			</Row>
		</Container>
		</div>
	);


}

export default SignIn;
