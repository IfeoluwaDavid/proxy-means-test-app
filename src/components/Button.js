import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: center;
`;

const BlockButton = ({ title, variant, size, onClick }) => {
  return (
    <StyledButton variant={variant} size={size} onClick={onClick} block>
      {title}
    </StyledButton>
  );
};

export default BlockButton;
