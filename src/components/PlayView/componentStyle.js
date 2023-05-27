import styled from 'styled-components'

export const PlayItem = styled.li`
  width: 40%;
`
export const PlayButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const PlayImage = styled.img`
  width: 180px;
  height: 180px;
  @media (max-width: 767px) {
    width: 150px;
    height: 150px;
  }
`
