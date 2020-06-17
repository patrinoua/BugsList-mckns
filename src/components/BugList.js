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

const BugList = () => {
  const [items, setItems] = useState([
    { id: 1, state: false, type: 'Spam', text: 'Get up early' },
    { id: 2, state: false, type: 'Spam', text: 'Do some meditation' },
    { id: 3, state: false, type: 'Spam', text: 'Eat a healthy breakfast' },
    { id: 4, state: false, type: 'Spam', text: 'Drink plenty of water' },
  ])

  const blockHandler = (id) => {
    //api call to block {...}

    //front end part:
    const newItems = [...items]
    const itemIndex = newItems.findIndex((item) => item.id === id)
    newItems.splice(itemIndex, 1)
    setItems(newItems)
  }

  const resolveHandler = (id) => {
    //api call to resolve {...}

    //front end part:
    const newItems = [...items]
    const itemIndex = newItems.findIndex((item) => item.id === id)
    newItems[itemIndex].state = !newItems[itemIndex].state
    setItems(newItems)
  }

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
