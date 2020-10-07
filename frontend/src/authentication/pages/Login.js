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

function Login() {
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
                            //onChange={this.handleChange}
                            //value={username}
                            type="text"
                        />

                        <Form.Input
                            fluid
                            name="email"
                            icon="mail"
                            iconPosition="left"
                            placeholder="Email"
                            type="text"
                        />

                        <Form.Input
                            fluid
                            name="password"
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            //onChange={this.handleChange}
                            //value={password}
                            //className={this.handleInputError(errors, "password")}
                            type="password"
                        />


                        <Button
                            //disabled={loading}
                            //className={loading ? "loading" : ""}
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
                    Not a user? <Link to="/register">Register for a Loud Bookclub account today</Link>
                </Message>
            </Grid.Column>
        </Grid>
    );
}

export default Login;