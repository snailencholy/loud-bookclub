import React, { useState } from 'react';
import "../auth.css"
import {
    Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
    Image
    //Icon
  } from "semantic-ui-react";
import { Link, useHistory } from 'react-router-dom';


import simpleLogo from '../../Assets/tab-icon_1.svg'

//TODO: Refactor into a class component and make the inputs controlled.


function Login() {

    const history = useHistory();

    const [username, setUserName] = useState('')

    const [password, setPassword] = useState('')



    const onChange = event => {
        switch (event.target.name) {
            case "username":
                setUserName(event.target.value)
            
            case "password":
                setPassword(event.target.value)
        }
    }

    const submit = event => {
        let user = {
            username: username,
            password: password
        }

        if (validate(user)){
            history.push("/")
        } else {
            window.location.reload();
            
        }
        
    }

    function validate(user) {
        if (user.username.length !== 0 && user.password.length !== 0) {
            return sendToAPI(user);
        } else {
            alert("Wrong username or password")
            return false;
        }
    }

    function sendToAPI(user) {
        //When the backend is in place we need to send the
        //user and validate the credentials against the database
        return true;
    }

    return(
        <Grid textAlign="center" verticalAlign="middle" className="auth">
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h1" icon textAlign="center" className="typography" style={{color: "#E6E6E6"}}>
                    <Image  src={simpleLogo}  size="medium"/>
                    Log in to your account
                </Header>
                <Form size="large" className="form">
                    <Segment stacked>
                        <Form.Input 
                            fluid
                            name="username"
                            icon="user"
                            iconPosition="left"
                            placeholder="Username"
                            onChange={onChange}
                            type="text"
                        />

                        <Form.Input
                            fluid
                            name="password"
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            onChange={onChange}
                            type="password"
                        />


                        <Button
                            //disabled={loading}
                            //className={loading ? "loading" : ""}
                            className="typography"
                            style={{ backgroundColor: "#2065A5"}}//color="#2065A5"
                            fluid
                            size="large"
                            onClick={submit}
                        >
                            Submit
                        </Button>

                    </Segment>
                </Form>

                <Message>
                    Not a user? <Link to="/register">Register for a Loud Bookclub account today</Link>
                </Message>
            </Grid.Column>
        </Grid>
    );
}

export default Login;