import React, { useState } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";
import styled from "styled-components";

import Container from "../../components/container.js";
import BlockButton from "../../components/Button.js";
import NotificationBar from "../../components/notification-bar.js";
import { saveUserInfo } from "../../utilities/helper-functions";

const FormGroup = styled(Form.Group)`
  margin: 10px;
  align-self: center;
`;

const Login = () => {
  let history = useHistory();
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [notification, setNotification] = useState("");
  const [notificationVariant, setNotificationVariant] = useState("");
  const [showNotificationBar, setShowNotificationBar] = useState("");

  const getData = () => {
    const loginCredentials = {
      emailAddress: enteredEmail,
      password: enteredPassword,
    };
    return loginCredentials;
  };

  const validateData = (data) => {
    // const feedback = validation.validateRegistration(data);
    // return feedback;
    return { status: true, message: "Invalid Information Provided!" };
  };

  const submitData = async (loginCredentials) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginCredentials),
    };

    const url = "http://localhost:3000/proxy-means-test/crudops/login";

    await fetch(url, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        saveUserInfo(response.userData.Items[0]);
      })
      .then(() => {
        history.push("/all-applications");
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
    // This if statement is a temporary "make-shift" validation
    if (feedback.status && data.emailAddress && data.password) {
      submitData(data);
    } else {
      notifyUser(feedback.message, "danger");
    }
  };

  return (
    <Container size="small" title="Login">
      <Form>
        {showNotificationBar && (
          <NotificationBar
            message={notification}
            variant={notificationVariant}
          />
        )}
        <fieldset>
          <FormGroup>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <BlockButton
              variant="secondary"
              size="md"
              title="Login"
              onClick={handleSubmit}
            />
            <Link to="/register">
              <BlockButton
                variant="outline-secondary"
                size="md"
                title="Register"
              />
            </Link>
          </FormGroup>
        </fieldset>
      </Form>
    </Container>
  );
};

export default withRouter(Login);
