import styled from 'styled-components'

export const RockPaperScissorContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const ScoreBody = styled.div`
  width: 60%;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    width: 95%;
  }
`

export const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const RpsHeading = styled.h1`
  width: 100px;
  font-family: 'Bree Serif';
  color: #ffffff;
  font-weight: 500;
  font-size: 22px;
  margin: 0px 0px 0px 10px;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`
export const ScoreCard = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 10px 10px 0px;
`

export const Score = styled.p`
  font-family: ${props => (props.isFontFamily ? 'Bree Serif' : 'Roboto')};
  color: '#223a5f';
  font-weight: ${props => (props.isFontWeight ? 500 : 700)};
  font-size: ${props => (props.isFontSize ? '22px' : '40px')};
  margin: 0px 0px 0px 0px;
  @media (max-width: 767px) {
    font-size: ${props => (props.isFontSize ? '20px' : '35px')};
  }
`

export const UnOrderedElement = styled.ul`
  width: 50%;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    width: 95%;
  }
`
