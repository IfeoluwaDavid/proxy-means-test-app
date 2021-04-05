import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledForm = styled(Form)`
  margin: 10px;
  align-self: center;
  @media (max-width: 767px) {
    .form-row {
      display: block;
    }
  }
`;

const StepTwo = () => {
  return (
    <StyledForm>
      <Form.Group controlid="formGridEmail">
        <Form.Label>Wall Condition</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>
      <Form.Group controlid="formGridPassword">
        <Form.Label>Floor Condition</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Form.Group controlid="formGridPassword">
        <Form.Label>Roof Condition</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Form.Group controlid="formGridPassword">
        <Form.Label>Main source of energy used for cooking</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlid="formGridEmail">
          <Form.Label>Wall Material</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group as={Col} controlid="formGridPassword">
          <Form.Label>Floor Material</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlid="formGridEmail">
          <Form.Label>Does this house have a ceiling?</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group as={Col} controlid="formGridPassword">
          <Form.Label>Trash Disposal Method</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
      </Form.Row>
    </StyledForm>
  );
};

export default withRouter(StepTwo);
