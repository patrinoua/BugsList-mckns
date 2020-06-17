import React, { useState } from 'react'
import {
  AppContainer,
  Heading,
  TableContainer,
  Table,
  ClearAllContainer,
  ClearAll,
  Regular,
  TrashIcon,
} from './elements'
import ListItem from './ListItem'
import axios from 'axios'

const BugList = ({ reports }) => {
  const [items, setItems] = useState(reports)

  const blockHandler = (reportId) =>
  axios
    .put('/reports/blocked/:reportId', { reportId: reportId })
    .then((res) => setItems(res.data.elements))

  const resolveHandler = (reportId) =>
    axios
      .put('/reports/:reportId', { reportId: reportId })
      .then((res) => setItems(res.data.elements))

  const trashAllHandler = () => setItems([])

  return (
    <AppContainer>
      <Heading>Reports</Heading>
      <TableContainer>
        {items.length === 0 ? (
          <Regular>No bugs!</Regular>
        ) : (
          <Table>
            <tbody>
              {items.map((item) => (
                <ListItem
                  key={item.id}
                  item={item}
                  resolveHandler={resolveHandler}
                  blockHandler={blockHandler}
                />
              ))}
            </tbody>
          </Table>
        )}
      </TableContainer>
      {items.length ? (
        <ClearAllContainer>
          <ClearAll onClick={trashAllHandler}>
            <TrashIcon />
            Clear all
          </ClearAll>
        </ClearAllContainer>
      ) : (
        ''
      )}
    </AppContainer>
  )
}

export default BugList
