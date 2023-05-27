import {
  GameViewCard,
  GameStatusBody,
  GameStatusCard,
  Heading,
  CardImage,
  GameParagraph,
  PlayAgainButton,
} from './componentStyle'

const GameView = props => {
  const {yourImage, opponentImage, gameResult, onClickOfPlayAgain} = props

  const onPlayAgain = () => {
    onClickOfPlayAgain()
  }

  return (
    <GameViewCard>
      <GameStatusBody>
        <GameStatusCard>
          <Heading>YOU</Heading>
          <CardImage src={yourImage} alt="your choice" />
        </GameStatusCard>
        <GameStatusCard>
          <Heading>OPPONENT</Heading>
          <CardImage src={opponentImage} alt="opponent choice" />
        </GameStatusCard>
      </GameStatusBody>
      <GameParagraph>{gameResult}</GameParagraph>
      <PlayAgainButton type="button" onClick={onPlayAgain}>
        PLAY AGAIN
      </PlayAgainButton>
    </GameViewCard>
  )
}

export default GameView
