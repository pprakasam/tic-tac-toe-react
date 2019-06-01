import React, { Component } from 'react'
import './App.scss'

class App extends Component {
  constructor () {
    super()
    this.state = {
      turn: 'O',
      board: Array(9).fill('')
    }
  }
  handleClick = (event) => {
    const boardCopy = this.state.board.slice()
    if (!boardCopy[event.target.dataset.square]) {
      boardCopy[event.target.dataset.square] = this.state.turn
      event.target.innerText = this.state.turn
      console.log(this.state.turn)
      this.setState({
        board: boardCopy,
        turn: this.state.turn === 'X' ? 'O' : 'X'
      })
    }
  }

  render () {
    console.log(this.state.board)
    return (
      <div className="game">
        <div className="head">
          <h1>TIC TAC TOE</h1>
        </div>
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
