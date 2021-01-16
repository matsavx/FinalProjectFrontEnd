import React, {Component} from "react";
import {Button, Container, Form} from "react-bootstrap";

export default class Support extends Component {
    render() {
        return (
            <Container>
                <h1>Get into contact with me</h1>
                <Form>
                    <Form.Group controlId="myEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>

                    <Form.Group controlId="myPassword">
                        <Form.Label>What do you want to tell me</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Text something..."/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        )
    }
}