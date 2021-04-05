import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Col, FormControl } from "react-bootstrap";
import styled from "styled-components";

const StyledForm = styled(Form)`
  margin: 5px;
  align-self: center;
  @media (max-width: 767px) {
    .form-row {
      display: block;
    }
  }
`;

const StepOne = () => {
  return (
    <StyledForm>
      <Form.Row>
        <Form.Group as={Col} controlid="formGridEmail">
          <Form.Label>Region</Form.Label>
          <FormControl as="select">
            <option>Central</option>
            <option>Pending</option>
            <option>Disapprove</option>
          </FormControl>
        </Form.Group>
        <Form.Group as={Col} controlid="formGridPassword">
          <Form.Label>Number of rooms</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlid="formGridEmail">
          <Form.Label>Number of persons per room</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group as={Col} controlid="formGridPassword">
          <Form.Label>Overcrowding by rooms</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlid="formGridEmail">
          <Form.Label>Males younger than 12 years of age</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group as={Col} controlid="formGridPassword">
          <Form.Label>Females younger than 12 years of age</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlid="formGridEmail">
          <Form.Label>Total persons younger than age 12</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group as={Col} controlid="formGridPassword">
          <Form.Label>Number of children 0 to 19 in household</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlid="formGridEmail">
        <Form.Label>
          Number of persons younger than age 19 or over age 64
        </Form.Label>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>

      <Form.Group controlid="formGridEmail">
        <Form.Label>Number of persons between ages 19 and 64</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>
    </StyledForm>
  );
};

export default withRouter(StepOne);
