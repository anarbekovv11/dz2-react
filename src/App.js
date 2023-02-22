import React from "react";

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        )
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i}/>
    }


    render() {
        const status = "Next player is : O"

        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                </div>
                <div className="board-row">
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                    {this.renderSquare(16)}
                </div>
                <div className="board-row">
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}
                    {this.renderSquare(20)}
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                </div>
                <div className="board-row">
                    {this.renderSquare(24)}
                    {this.renderSquare(25)}
                    {this.renderSquare(26)}
                    {this.renderSquare(27)}
                    {this.renderSquare(28)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component {
    render() {
        return(
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div></div>
                    <ol></ol>
                </div>
            </div>
        )
    }
}

export default Game;