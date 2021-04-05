import React from "react";
import { Header } from "semantic-ui-react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  margin: 20px 10px 30px 20px;
`;

const AppHeader = () => {
  return (
    <HeaderContainer>
      <Header as="h1" textAlign="center">
        Proxy Means Test
      </Header>
    </HeaderContainer>
  );
};

export default AppHeader;
