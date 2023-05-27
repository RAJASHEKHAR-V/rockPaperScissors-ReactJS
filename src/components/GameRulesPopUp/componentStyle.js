import Popup from 'reactjs-popup'
import styled from 'styled-components'
import {RiCloseLine} from 'react-icons/ri'

export const PopUpButtonCard = styled.div`
  align-self: flex-end;
  margin-right: 10px;
`

export const StyledPopup = styled(Popup)`
  &-content {
    width: 80%;
  }
  @media (max-width: 767px) {
    &-content {
      width: 90%;
    }
  }
`

export const PopupButton = styled.button`
  width: 120px;
  height: 35px;
  background-color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  font-family: 'Bree Serif';
  color: #223a5f;
  font-weight: 500;
  font-size: 18px;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`
export const PopupContainer = styled.div`
  background-color: #ffffff;
  background-size: cover;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    min-height: 75vh;
  }
`

export const CloseButtonCard = styled.div`
  align-self: flex-end;
`

export const CloseButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 10px;
`
export const RiCloseLineElement = styled(RiCloseLine)`
  width: 25px;
  height: 25px;
`

export const RulesImageCard = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RulesImage = styled.img`
  width: 50%;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    width: 80%;
  }
`
