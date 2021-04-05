import React from "react";
import { Card, Navbar, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  isUserLoggedIn,
  getUserInfo,
  clearUserInfo,
} from "../utilities/helper-functions";

const StyledNavBar = styled(Navbar)`
  background-color: #ffffff;
`;

const ContainerText = styled.p`
  color: #000000;
  margin: 15px;
  font-weight: 600;
  font-size: 20px;
`;

const OuterContainer = styled.div`
  margin-top: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  min-width: 300px;
  height: 100%;
`;

const getContainerSize = (size) => {
  switch (size) {
    case "small":
      return "35%";
    case "medium":
      return "60%";
    case "large":
      return "85%";
    default:
      return "35%";
  }
};

const Container = ({ children, size, title }) => {
  let user = getUserInfo();
  let isLoggedIn = isUserLoggedIn();
  let history = useHistory();

  const handleLogOut = () => {
    history.push("/login");
    clearUserInfo();
  };

  return (
    <OuterContainer style={{ width: getContainerSize(size) }}>
      <Card>
        <StyledNavBar variant="dark" bg="light">
          <ContainerText>{title}</ContainerText>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {isLoggedIn ? (
              <>
                <ContainerText>
                  Signed in: {user.firstName} {user.lastName}
                </ContainerText>
                <Button variant="outline-danger" onClick={handleLogOut}>
                  Log Out
                </Button>
              </>
            ) : null}
          </Navbar.Collapse>
        </StyledNavBar>
        <Card.Body>{children}</Card.Body>
      </Card>
    </OuterContainer>
  );
};

export default Container;
