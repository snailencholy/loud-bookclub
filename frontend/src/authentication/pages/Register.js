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
import { Link } from 'react-router-dom';


import simpleLogo from '../../Assets/tab-icon_1.svg'




function Register() {

    const [username, setUserName] = useState('')
    const [usernameHelper, setUsernameHelper] = useState('')

    const [email, setEmail] = useState('')
    const [emailHelper, setEmailHelper] = useState('')

    const [password, setPassword] = useState('')
    const [passwordHelper, setPasswordHelper] = useState('')

    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [passwordConfHelper, setPasswordConfHelper] = useState('')


    

    const onChange = event => {
        let valid;

        switch (event.target.name) {
            case "username":
                setUserName(event.target.value);
                
            case "email":
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
                setEmail(event.target.value);

                if(!valid) {
                    setEmailHelper("Invalid Email")
                } else {
                    setEmailHelper("")
                }

            case "password":
                valid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(event.target.value)
                setPassword(event.target.value)

                if(!valid) {
                    setPasswordHelper("Invalid Password")
                } else {
                    setPasswordHelper("")
                }

            case "passwordConfirmation": 
                valid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(event.target.value)
                setPasswordConfirmation(event.target.value)

                    if(!valid) {
                        setPasswordConfHelper("Invalid Password")
                    } else {
                        setPasswordConfHelper("")
                    }

            default: break; 
        }
    }
    

    const onSubmit = event => {
        

        let newUser = {
            username: "",
            email: "",
            password: ""
        }

        

            if(password !== passwordConfirmation) {
                alert("passwords do not match")

            } else if (password === passwordConfirmation && username && email) {
                newUser = {
                    username: username,
                    email: email,
                    password: password
                }

                //alert(newUser.username, newUser.email, newUser.password)
            }
        

        setUserName("");
        setEmail("");
        setPassword("");
        setPasswordConfirmation("");

    }


    return(

        <Grid textAlign="center" verticalAlign="middle" className="auth">
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h1" icon textAlign="center" className="typography" style={{color: "#E6E6E6"}}>
                    <Image src={simpleLogo}  size="medium" />
                    Register for Loud Bookclub
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
                            value={username}
                            type="text"
                        />

                        <Form.Input
                            fluid
                            name="email"
                            icon="mail"
                            iconPosition="left"
                            placeholder="Email"
                            onChange={onChange}
                            error={emailHelper.length !== 0}
                            type="text"
                        />

                        <Form.Input
                            fluid
                            name="password"
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            onChange={onChange}
                            //value={password}
                            error={passwordHelper.length !== 0}
                            type="password"
                        />

                        <Form.Input
                            fluid
                            name="passwordConfirmation"
                            icon="repeat"
                            iconPosition="left"
                            placeholder="Password Confirmation"
                            onChange={onChange}
                            error={passwordConfHelper.length !== 0}
                            //value={passwordConfirmation}
                            //className={this.handleInputError(errors, "password")}
                            type="password"
                        />

                        <Button
                            //disabled={loading}
                            //className={loading ? "loading" : ""}
                            name="submit"
                            onClick={onSubmit}
                            className="typography"
                            style={{ backgroundColor: "#2065A5"}}//color="#2065A5"
                            fluid
                            size="large"
                        >
                            Submit
                        </Button>

                    </Segment>
                </Form>

                <Message>
                    Already a user? <Link to="/login">Login</Link>
                </Message>
            </Grid.Column>
        </Grid>
    );
}

export default Register;