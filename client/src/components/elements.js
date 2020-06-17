import styled from 'styled-components'

const colors = {
  backgroundColor: '#e1e6eb',
  textGrey: '#afbdcb',
  textBlack: '#354352',
  textGreen: '#5eb77f',
  highlightGrey: '#eff2f6',
  boxShadow: ' rgba(0, 0, 0, 0.25)',
}

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  background: ${colors.backgroundColor};
`
export const Heading = styled.h1`
  font-size: 34px;
  color: ${colors.textBlack};
  margin: 50px;
`
export const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Table = styled.table`
  width: 700px;
  min-height: 58px;
  border-radius: 5px;
  paddidng: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  box-shadow: 0 1px 3px ${colors.boxShadow};
  background: white;
  border-spacing: 0;
`
export const Tr = styled.tr`
  background: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;

  &:nth-child(even) {
    background: ${colors.highlightGrey};
  }
`
export const Td = styled.td`
  font-size: 15px;
  height: 70px;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 5px;
`
export const TdMiddle = styled(Td)`
  width: 40%;
`
export const TdRight = styled(Td)`
  width: 20%;
  align-items: center;
`
export const TextContainer = styled.div`
  // font-weight: 500;
  height: 35px;
  padding-bottom: 3px;
  text-align: left;
  color: ${colors.textBlack};
`
export const MessageContainer = styled(TextContainer)`
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Button = styled.button`
  width: 80px;
  margin: 2px;
`
export const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`
export const TrashIcon = styled.div`
  background-image: url('./trash.svg');
  width: 13px;
  height: 13px;
  margin-right: 10px;
`
export const ClearAllContainer = styled.div`
  height: 150px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.textGrey};
  font-weight: 700;
  text-transform: uppercase;
`
export const ClearAll = styled.div`
  width: 100px;
  height: 30px;
  align-items: center;
  display: flex;
`
export const Regular = styled.div`
  font-size: 14px;
`
