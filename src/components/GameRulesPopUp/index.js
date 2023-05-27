import {
  PopUpButtonCard,
  StyledPopup,
  PopupButton,
  PopupContainer,
  CloseButtonCard,
  CloseButton,
  RiCloseLineElement,
  RulesImageCard,
  RulesImage,
} from './componentStyle'

const GameRulesPopUp = () => (
  <PopUpButtonCard>
    <StyledPopup modal trigger={<PopupButton type="button">RULES</PopupButton>}>
      {close => (
        <PopupContainer>
          <CloseButtonCard>
            <CloseButton onClick={() => close()}>
              <RiCloseLineElement />
            </CloseButton>
          </CloseButtonCard>
          <RulesImageCard>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </RulesImageCard>
        </PopupContainer>
      )}
    </StyledPopup>
  </PopUpButtonCard>
)

export default GameRulesPopUp
