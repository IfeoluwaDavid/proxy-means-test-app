import React from "react";
import { Alert } from "react-bootstrap";
import styled from "styled-components";

const AlertContainer = styled(Alert)`
  margin: 10px;
`;

const NotificationBar = ({ message, variant }) => {
  return <AlertContainer variant={variant}>{message}</AlertContainer>;
};

export default NotificationBar;
