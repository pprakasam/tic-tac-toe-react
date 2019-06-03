import React, { Component } from 'react'
import './App.scss'

class App extends Component {
  constructor () {
    super()
    this.state = {
      turn: 'X',
      gameEnded: false,
      winner: ''
    }
    this.gameState = {
      board: Array(9).fill(''),
      totalMoves: 0
    }
  }
  handleClick = (event) => {
    if (this.state.gameEnded) return
    if (!this.gameState.board[event.target.dataset.square]) {
      this.gameState.board[event.target.dataset.square] = this.state.turn
      event.target.innerText = this.state.turn
      this.setState({
        turn: this.state.turn === 'X' ? 'O' : 'X'
      })
      this.gameState.totalMoves++
    }
    if (this.checkWinner() === 'X') {
      this.setState({
        gameEnded: true,
        winner: 'X',
        message: 'Winner is X'
      })
    } else if (this.checkWinner() === 'O') {
      this.setState({
        gameEnded: true,
        winner: 'O',
        message: 'Winner is O'
      })
    } else if (this.checkWinner() === 'TIE') {
      this.setState({
        gameEnded: true,
        winner: 'TIE',
        message: 'TIE between X and O'
      })
    }
  }

  checkWinner () {
    const board = this.gameState.board
    const winnerMoves = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],
      [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    for (let i = 0; i < winnerMoves.length; i++) {
      if (board[winnerMoves[i][0]] === board[winnerMoves[i][1]] &&
      board[winnerMoves[i][1]] === board[winnerMoves[i][2]]) {
        return board[winnerMoves[i][0]]
      }
    }
    if (this.gameState.totalMoves === 9) {
      return 'TIE'
    }
  }

  render () {
    return (
      <div className="game">
        <div className="head">
          <h1>TIC TAC TOE</h1>
        </div>
        <div className="game-status">{this.state.message}</div>
        <div className="board" onClick={this.handleClick}>
          <div className="square" data-square="0"></div>
          <div className="square" data-square="1"></div>
          <div className="square" data-square="2"></div>
          <div className="square" data-square="3"></div>
          <div className="square" data-square="4"></div>
          <div className="square" data-square="5"></div>
          <div className="square" data-square="6"></div>
          <div className="square" data-square="7"></div>
          <div className="square" data-square="8"></div>
        </div>
      </div>
    )
  }
}

export default App
