import React from 'react'
import {
  Tr,
  Td,
  TdMiddle,
  TdRight,
  TextContainer,
  MessageContainer,
  Button,
} from './elements'

const ListItem = ({ item, resolveHandler, blockHandler }) => (
  <Tr>
    <Td>
      <TextContainer>Id: {item.id}</TextContainer>
      <TextContainer>State: {item.state ? 'Resolved' : 'Open'}</TextContainer>
      <a href="">Details</a>
    </Td>
    <TdMiddle>
      <TextContainer>Type: {item.type}</TextContainer>
      <MessageContainer>Message: {item.text}</MessageContainer>
    </TdMiddle>
    <TdRight>
      <Button onClick={() => blockHandler(item.id)}>Block</Button>
      <Button onClick={() => resolveHandler(item.id)}>Resolve</Button>
    </TdRight>
  </Tr>
)

export default ListItem
