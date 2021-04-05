import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import styled from "styled-components";

import Container from "../../components/container.js";
import StepOne from "../../features/create-application/step-one.js";
import StepTwo from "../../features/create-application/step-two.js";
import StepThree from "../../features/create-application/step-three.js";

const ButtonGroup = styled.div`
  width: 100%;
  * {
    display: inline;
    margin-left: 10px;
    width: 48%;
  }

  @media (max-width: 767px) {
    width: 100%;
    * {
      width: 100%;
      display: block;
      margin-top: 10px;
    }
  }
`;

const totalNumberOfSteps = 3;

const CreateApplication = () => {
  const [step, setStep] = useState(1);

  console.log(step);

  const formSwitch = (step) => {
    switch (step) {
      case 1:
        return <StepOne nextStep={nextStep} />;
      case 2:
        return <StepTwo nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <StepThree prevStep={prevStep} />;
      default:
        return null;
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const nextStep = () => {
    if (step < totalNumberOfSteps) {
      setStep(step + 1);
    }
  };

  return (
    <Container size="small" title={`Step ${step} / ${totalNumberOfSteps}`}>
      {formSwitch(step)}
      <ButtonGroup>
        {step > 1 ? (
          <Button
            as="input"
            type="button"
            variant="outline-secondary"
            value="Previous"
            onClick={prevStep}
          />
        ) : null}
        {step < 3 ? (
          <Button
            as="input"
            type="button"
            variant="outline-secondary"
            value="Next"
            onClick={nextStep}
          />
        ) : null}
        {step === 3 ? (
          <Button as="input" type="button" variant="success" value="Submit" />
        ) : null}
      </ButtonGroup>
    </Container>
  );
};

export default withRouter(CreateApplication);
