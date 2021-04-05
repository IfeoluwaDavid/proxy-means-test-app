import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, Col } from "react-bootstrap";
import styled from "styled-components";

import Container from "../../components/container.js";
import NotificationBar from "../../components/notification-bar.js";
import BlockButton from "../../components/Button.js";

//const validation = require("../validation/validation.js");

const FormGroup = styled(Form.Group)`
  margin: 10px;
  align-self: center;
`;

const Register = () => {
  const [enteredfirstName, setFirstName] = useState("");
  const [enteredLastName, setLastName] = useState("");
  const [enteredEmailAddress, setEmailAddress] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [enteredConfirmedPassword, setConfirmedPassword] = useState("");
  const [notification, setNotification] = useState("");
  const [notificationVariant, setNotificationVariant] = useState("");
  const [showNotificationBar, setShowNotificationBar] = useState("");

  const getData = () => {
    const inputValues = {
      firstName: enteredfirstName,
      lastName: enteredLastName,
      emailAddress: enteredEmailAddress,
      password: enteredPassword,
      confirmedPassword: enteredConfirmedPassword,
    };
    return inputValues;
  };

  const validateData = (data) => {
    // const feedback = validation.validateRegistration(data);
    // return feedback;
    return { status: false, message: "Invalid Information Provided!" };
  };

  const submitData = (registrationData) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registrationData),
    };

    const url = "http://localhost:3000/proxy-means-test/crudops/register";

    fetch(url, requestOptions).then((response) => {
      if (response.ok) {
        notifyUser("Registration Complete!", "success");
      } else {
        notifyUser("Oops! Something went wrong!", "danger");
      }
    });
  };

  const notifyUser = (message, variant) => {
    setNotification(message);
    setNotificationVariant(variant);
    setShowNotificationBar(true);
  };

  const handleSubmit = () => {
    const data = getData();
    const feedback = validateData(data);
    if (feedback.status) {
      submitData(data);
    } else {
      notifyUser(feedback.message, "danger");
    }
  };

  return (
    <Container size="small" title="Sign Up">
      {/* <NavBar navTitle="Sign Up" /> */}
      <Form>
        {showNotificationBar && (
          <NotificationBar
            message={notification}
            variant={notificationVariant}
          />
        )}
        <Form.Row>
          <FormGroup as={Col} controlid="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={(event) => setFirstName(event.target.value)}
            />
          </FormGroup>
          <FormGroup as={Col} controlid="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={(event) => setLastName(event.target.value)}
            />
          </FormGroup>
        </Form.Row>

        <Form.Row>
          <FormGroup as={Col} controlid="formGridPassword">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(event) => setEmailAddress(event.target.value)}
            />
          </FormGroup>
        </Form.Row>

        <Form.Row>
          <FormGroup as={Col} controlid="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormGroup>
        </Form.Row>

        <Form.Row>
          <FormGroup as={Col} controlid="formGridCity">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={(event) => setConfirmedPassword(event.target.value)}
            />
          </FormGroup>
        </Form.Row>

        <FormGroup>
          <BlockButton
            variant="secondary"
            size="md"
            title="Sign Up"
            onClick={handleSubmit}
          />
          <Link to="/login">
            <BlockButton variant="outline-secondary" size="md" title="Login" />
          </Link>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default withRouter(Register);
