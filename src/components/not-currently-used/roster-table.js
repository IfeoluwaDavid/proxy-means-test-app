import React, { useState } from "react";
import { slice, concat } from 'lodash';
import { Table, Button } from 'semantic-ui-react';
import ToggleButton from './toggle-button.js';
import { getRosterData } from '../functions/roster.service.js'

let roster = getRosterData();

const LENGTH = roster.length;
const DATA = [...Array(LENGTH).keys()];
const LIMIT = 8;

const RosterTable = () => {

  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(DATA, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < (LENGTH - 1);
    const newList = concat(list, slice(DATA, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  }

  return <div>
    < Table singleLine >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Artist</Table.HeaderCell>
          <Table.HeaderCell>Rate</Table.HeaderCell>
          <Table.HeaderCell>Streams</Table.HeaderCell>
          <Table.HeaderCell>Payout Amount</Table.HeaderCell>
          <Table.HeaderCell>Payout Status</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body >
        {list.map((object, index) => {
          return (
            <Table.Row>
              <Table.Cell>{roster[index].artist}</Table.Cell>
              <Table.Cell>{roster[index].rate}</Table.Cell>
              <Table.Cell>{roster[index].streams}</Table.Cell>
              <Table.Cell>{roster[index].payoutAmount}</Table.Cell>
              <Table.Cell><ToggleButton>{roster[index].payoutStatus ? 'Completed' : 'Pending'}</ToggleButton></Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table >
    {showMore && <Button fluid onClick={loadMore}>Load More</Button>}
  </div>
}

export default RosterTable