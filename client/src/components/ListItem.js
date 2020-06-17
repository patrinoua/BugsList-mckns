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
    <Td colspan={3}>
      <TextContainer>
        <b>Id:</b> {item.id}
      </TextContainer>
      <TextContainer>
        <b>State:</b> {item.state}
      </TextContainer>
      <a href="">Details</a>
    </Td>
    <TdMiddle>
      <TextContainer>
        <b>Type:</b> {item.payload.reportType}
      </TextContainer>
      <MessageContainer>
        <b>Message:</b> {item.payload.message}
      </MessageContainer>
      {item.isHiddenFromUsers ? 'hidden from users' : ''}
    </TdMiddle>
    <TdRight>
      <Button onClick={() => blockHandler(item.id)}>Block</Button>
      <Button onClick={() => resolveHandler(item.id)}>Resolve</Button>
    </TdRight>
  </Tr>
)

export default ListItem
