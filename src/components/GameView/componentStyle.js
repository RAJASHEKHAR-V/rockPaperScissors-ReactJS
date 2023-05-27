import styled from 'styled-components'

export const GameViewCard = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    width: 95%;
  }
`

export const GameStatusBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const GameStatusCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  color: #ffffff;
  font-weight: 500;
  font-size: 28px;
  align-self: center;
  @media (max-width: 767px) {
    font-size: 25px;
  }
`
export const GameParagraph = styled.p`
  font-family: 'Bree Serif';
  color: #ffffff;
  font-weight: 500;
  font-size: 22px;
  align-self: center;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`
export const CardImage = styled.img`
  width: 180px;
  height: 180px;
  @media (max-width: 767px) {
    width: 150px;
    height: 150px;
  }
`
export const PlayAgainButton = styled.button`
  width: 180px;
  height: 40px;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-family: 'Bree Serif';
  color: #223a5f;
  font-weight: 500;
  font-size: 18px;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`
