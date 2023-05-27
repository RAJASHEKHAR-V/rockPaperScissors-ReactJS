import {Component} from 'react'
import GameView from '../GameView'
import PlayView from '../PlayView'
import GameRulesPopUp from '../GameRulesPopUp'

import {
  RockPaperScissorContainer,
  ScoreBody,
  DetailsCard,
  RpsHeading,
  ScoreCard,
  Score,
  UnOrderedElement,
} from './componentStyle'

const gameStatusConstants = {
  rock: 'ROCK',
  scissor: 'SCISSORS',
  paper: 'PAPER',
}
const gameResultConstants = {
  won: 'YOU WON',
  lose: 'YOU LOSE',
  draw: 'IT IS DRAW',
}

class RockPaperScissor extends Component {
  state = {
    score: 0,
    yourImage: '',
    opponentImage: '',
    gameResult: '',
    showGameResult: false,
  }

  onClickOfRockPaperScissors = (id, imageUrl) => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    const randomImage = choicesList[randomNumber].imageUrl
    const randomImageId = choicesList[randomNumber].id

    // check Paper and Rock, Rock and Scissor,Scissor and Paper

    if (
      id === gameStatusConstants.paper &&
      randomImageId === gameStatusConstants.rock
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        yourImage: imageUrl,
        opponentImage: randomImage,
        gameResult: gameResultConstants.won,
        showGameResult: true,
      }))
    } else if (
      id === gameStatusConstants.rock &&
      randomImageId === gameStatusConstants.scissor
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        yourImage: imageUrl,
        opponentImage: randomImage,
        gameResult: gameResultConstants.won,
        showGameResult: true,
      }))
    } else if (
      id === gameStatusConstants.scissor &&
      randomImageId === gameStatusConstants.paper
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        yourImage: imageUrl,
        opponentImage: randomImage,
        gameResult: gameResultConstants.won,
        showGameResult: true,
      }))
    } else if (id === randomImageId) {
      this.setState({
        yourImage: imageUrl,
        opponentImage: randomImage,
        gameResult: gameResultConstants.draw,
        showGameResult: true,
      })
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        yourImage: imageUrl,
        opponentImage: randomImage,
        gameResult: gameResultConstants.lose,
        showGameResult: true,
      }))
    }
  }

  onClickOfPlayAgain = () => {
    this.setState(prevState => ({
      showGameResult: !prevState.showGameResult,
      yourImage: '',
      opponentImage: '',
      gameResult: '',
    }))
  }

  render() {
    const {choicesList} = this.props
    const {
      score,
      opponentImage,
      yourImage,
      gameResult,
      showGameResult,
    } = this.state

    return (
      <RockPaperScissorContainer>
        <ScoreBody>
          <DetailsCard>
            <RpsHeading>Rock Paper Scissors</RpsHeading>
          </DetailsCard>
          <ScoreCard>
            <Score isFontFamily isFontSize isWeight>
              Score
            </Score>
            <Score>{score}</Score>
          </ScoreCard>
        </ScoreBody>
        {showGameResult ? (
          <GameView
            yourImage={yourImage}
            opponentImage={opponentImage}
            gameResult={gameResult}
            onClickOfPlayAgain={this.onClickOfPlayAgain}
          />
        ) : (
          <UnOrderedElement>
            {choicesList.map(eachChoice => (
              <PlayView
                key={eachChoice.id}
                choice={eachChoice}
                onClickOfRockPaperScissors={this.onClickOfRockPaperScissors}
              />
            ))}
          </UnOrderedElement>
        )}
        <GameRulesPopUp />
      </RockPaperScissorContainer>
    )
  }
}

export default RockPaperScissor
