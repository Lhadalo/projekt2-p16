import React from "react";
import {Button, ControlLabel, Form, Col, Checkbox, FormControl, FormGroup, HelpBlock} from "react-bootstrap";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        alert('Email: ' + this.state.email + '\nPassword: ' + this.state.password + '\nUsername: ' + this.state.name);
        fetch('http://localhost:5000/register', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        });

        event.preventDefault();
    }

    render() {
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Username
                    </Col>
                    <Col sm={10}>
                        <FormControl name='name' type="text" placeholder="Username" value={this.state.name}
                                     onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl name='email' type="email" placeholder="Email" value={this.state.email}
                                     onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl name='password' type="password" placeholder="Password" value={this.state.password}
                                     onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">
                            Register
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}


export default RegisterForm;