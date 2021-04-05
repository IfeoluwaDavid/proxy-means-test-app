import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import {
  Button,
  Table,
  Pagination,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import styled from "styled-components";
import Container from "../../components/container.js";
import { getUserInfo } from "../../utilities/helper-functions";

const data = require("../../data.json").data;

const ResponsiveTable = styled(Table)`
  @media (max-width: 767px) {
    tbody tr td {
      text-align: right;
      position: relative;
      padding-left: 15px;
    }
    thead {
      display: none;
    }
    td {
      display: block;
      width: 100%;
    }
    tr {
      margin-bottom: 15;
    }
    td:before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 50%;
      padding-left: 15px;
      text-align: left;
      font-weight: 500;
    }
  }
`;

const FooterComponents = styled.div`
  display: -webkit-inline-box;

  .btn {
    margin-right: 10px;
  }

  @media (max-width: 767px) {
    * {
      width: 100%;
      margin-bottom: 10px;
    }
    display: block;
  }
`;

const AllApplications = () => {
  let history = useHistory();
  let user = getUserInfo();

  const CreateNewApplication = () => {
    history.push("/create-application");
  };

  return (
    <Container size="large" title="Manage Applications">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search keyword"
          aria-label="Recipient's username"
        />
        <InputGroup.Append>
          <Button variant="secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
      <ResponsiveTable striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Application ID</th>
            <th>Household ID</th>
            <th>Actions</th>
            {user.isAdmin ? <th>Options</th> : null}
            {user.isAdmin ? <th>Eligibility</th> : null}
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((object, index) => {
            return (
              <tr key={index}>
                <td data-label="No.">{index + 1}</td>
                <td data-label="Application ID">{object.artist}</td>
                <td data-label="Household ID">{object.streams}</td>
                <td data-label="Options">
                  <Button
                    as="input"
                    type="button"
                    variant="secondary"
                    value="Open"
                  />{" "}
                  {user.isAdmin ? (
                    <Button
                      as="input"
                      type="button"
                      variant="outline-secondary"
                      value="Process"
                    />
                  ) : (
                    <Button
                      as="input"
                      type="button"
                      variant="outline-secondary"
                      value="Withdraw"
                    />
                  )}
                </td>
                {user.isAdmin ? (
                  <td data-label="Actions">
                    <FormControl as="select">
                      <option>Approve</option>
                      <option>Pending</option>
                      <option>Disapprove</option>
                    </FormControl>
                  </td>
                ) : null}
                {user.isAdmin ? (
                  <td data-label="Eligibility">{object.rate}</td>
                ) : null}
                <td data-label="Status">{object.streams}</td>
              </tr>
            );
          })}
        </tbody>
      </ResponsiveTable>
      <FooterComponents>
        {!user.isAdmin ? (
          <Button
            as="input"
            type="button"
            variant="outline-primary"
            value="Create New Application"
            onClick={CreateNewApplication}
          />
        ) : null}
        {user.isAdmin ? (
          <Button
            as="input"
            type="button"
            variant="outline-primary"
            value="Process All Applications"
          />
        ) : null}
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </FooterComponents>
    </Container>
  );
};

export default withRouter(AllApplications);
