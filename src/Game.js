import React from "react";
import Grid from "@material-ui/core/Grid";
import Board from "./board";
import "./style.css";
import Winner from "./winner";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { board: Array(9).fill(null), winner: "", isGameEnd: false };
  }

  asyncSetState = (state) =>
    new Promise((resolve, reject) => this.setState(state, resolve)); //Promisifying setSttae becoz setState is an async function

  handleStateUpdate = async (index, value) => {
    if (this.state.isGameEnd) return;
    const newBoard = [...this.state.board];
    newBoard[index] = value;
    await this.asyncSetState({ board: newBoard });
    await this.setWinner();
    this.handleSystemMove();
  };

  handleReset = () => {
    this.setState({ board: [] ,winner:'',isGameEnd:false});
  };

  handleSystemMove = () => {
    if (this.state.isGameEnd) return;
    const boardArray = [...this.state.board];
    const random = Math.floor(Math.random() * boardArray.length);
    for (let i = random; i < boardArray.length + random; i++) {
      const index = i % boardArray.length;
      if (boardArray[index] !== "X" && boardArray[index] !== "O") {
        boardArray[index] = "O";
        break;
      }
    }
    this.setState({ board: boardArray }, this.setWinner);//passing setWinner as a callback
  };

  setWinner = () => {
    const winner = this.calculateWinner();
    return this.asyncSetState({ winner, isGameEnd: !!winner });
  };
  calculateWinner = () => {
    const board = this.state.board;
    const winnerPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let winnerPattern of winnerPatterns) {
      if (
        board[winnerPattern[0]] === board[winnerPattern[1]] &&
        board[winnerPattern[1]] === board[winnerPattern[2]]
      ) {
        return board[winnerPattern[0]];
      }
    }
  };

  render() {
    return (
      <div className="game" style={{ width: "100%" }}>
        <div
          className="game-board"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Board
            gameState={this.state.board}
            handleStateUpdate={this.handleStateUpdate}
            handleReset={this.handleReset}
          />
          <Winner handleWinner={this.state.winner} />
        </div>
      </div>
    );
  }
}
export default Game;
