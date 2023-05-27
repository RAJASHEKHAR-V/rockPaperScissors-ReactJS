import {PlayItem, PlayButton, PlayImage} from './componentStyle'

const PlayView = props => {
  const {choice, onClickOfRockPaperScissors} = props
  const {id, imageUrl} = choice
  const onChoiceButton = () => {
    onClickOfRockPaperScissors(id, imageUrl)
  }
  const testId = id.toLowerCase()

  return (
    <PlayItem>
      <PlayButton
        type="button"
        onClick={onChoiceButton}
        data-testid={`${testId}Button`}
      >
        <PlayImage src={imageUrl} alt={id} />
      </PlayButton>
    </PlayItem>
  )
}

export default PlayView
