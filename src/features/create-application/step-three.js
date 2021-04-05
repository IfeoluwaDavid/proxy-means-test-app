import React from "react";
import { withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";
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

const StepThree = () => {
  return (
    <StyledForm>
      <Form.Group controlid="formGridEmail">
        <Form.Label>Number of mobile phones</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>
      <Form.Group controlid="formGridPassword">
        <Form.Label>Owns a tablet</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Form.Group controlid="formGridEmail">
        <Form.Label>Owns a notebook or desktop computer</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>
      <Form.Group controlid="formGridPassword">
        <Form.Label>Years of schooling</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Form.Group controlid="formGridPassword">
        <Form.Label>Average years of education for adults</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Form.Group controlid="formGridPassword">
        <Form.Label>Years of education of the male head of house</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
    </StyledForm>
  );
};

export default withRouter(StepThree);
