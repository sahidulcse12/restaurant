import React from 'react';
import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';


const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const Contact = () => {

    document.title = "Contact";

    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        telNum: "",
        email: "",
        agree: false,
        contactType: "Tel.",
        message: ""
    });

    const handleInputChange = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        setContact(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        console.log(contact);
        event.preventDefault();
        setContact({
            firstName: "",
            lastName: "",
            telNum: "",
            email: "",
            agree: false,
            contactType: "Tel.",
            message: ""
        })
    }


    return (
        <div className="container">
            <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                <div className="col-12">
                    <h3>Send your feedback</h3>
                </div>
                <div className="col-12 col-md-7">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstName" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={contact.firstName}
                                    onChange={handleInputChange}
                                    validators={{
                                        required
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastName" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={contact.lastName}
                                    onChange={handleInputChange}
                                    validators={{
                                        required
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telNum" md={2}>Contact Tel.</Label>
                            <Col md={10}>
                                <Input
                                    type="tel"
                                    name="telNum"
                                    placeholder="Contact Tel"
                                    value={contact.telNum}
                                    onChange={handleInputChange}
                                    validators={{
                                        required,
                                        isNumber
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={contact.email}
                                    onChange={handleInputChange}
                                    validators={{
                                        required,
                                        validEmail
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{ size: 6, offset: 2 }}>
                                <FormGroup check>
                                    <Label check>
                                        <Input
                                            type="checkbox"
                                            name="agree"
                                            check={contact.agree}
                                            onChange={handleInputChange}
                                        />
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{ size: 3, offset: 1 }}>
                                <Input
                                    type="select"
                                    name="contactType"
                                    value={contact.contactType}
                                    onChange={handleInputChange}
                                >
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md={2}>Your Feedback</Label>
                            <Col md={10}>
                                <Input
                                    type="textarea"
                                    name="message"
                                    value={contact.message}
                                    rows="12"
                                    onChange={handleInputChange}
                                    validators={{
                                        required
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary">Send Feedback</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;