import React from 'react';
import Tile from './tile';
import * as GameTypes from '../constants/gametypes';

require('./css/board.css');

const hideOverlay = {
	display: "none"
};

const showOverlay = {
	display: "block"
};

export function getTileSize(boardDim) {
	var marginSize = 10;
	var boardSize = 500;
	var remSpace = boardSize - (boardDim * (marginSize * 2))
	var tileSize = remSpace / boardDim;
	return tileSize;
};

export function setStartGameOverlay(matchStatus) {
	if (matchStatus === GameTypes.NEW_GAME) {
		return showOverlay;
	}
	return hideOverlay;
};

export function setEndGameOverlay(matchStatus) {
	if (matchStatus === GameTypes.WINNER) {
		return showOverlay;
	}
	if (matchStatus === GameTypes.DRAW) {
		return showOverlay;
	}
	return hideOverlay;
};

export default class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = { };
	}

	render() {
		const tileSize = getTileSize(this.props.boardDim);
		const startGameStyle = setStartGameOverlay(this.props.matchStatus);
		const endGameStyle = setEndGameOverlay(this.props.matchStatus);
		return (
			<div id="board">
				<div className="gameOverlay" style={startGameStyle}>
					<div className="gameOverlayInfo">
						<h2>
							Welcome to Tic-Tac-Toe!
						</h2>
						<div>
							<label>Board Size</label>
							<div>
								<input type="number" min="3" max="10" value={this.state.inputValue} onChange={this.onInputChange.bind(this)}/>
							</div>
						</div>
						<div>
							<button onClick={this.onClickNewGame.bind(this)}>
								New Game
							</button>
						</div>
					</div>
				</div>
				<div className="gameOverlay" style={endGameStyle}>
					<div className="gameOverlayInfo">
						<h2>
							{this.props.matchStatus}
						</h2>
						<button onClick={this.props.resetBoard}>
							Reset Board
						</button>
					</div>
				</div>
				{
					// Generate tiles for board.
					this.props.board.map((value, index) => {
						return (
							<Tile
								key = {index}
								tileId = {index}
								tileSize = {tileSize}
								currentPlayer = {this.props.currentPlayer}
								value = {value}
								makeMove = {this.props.makeMove}
							/>
						);
					})
				}
			</div>
		);
	}

	getInitialState() {
		return {inputValue: this.props.boardDim};
	}

	onClickNewGame() {
		if (typeof this.state.inputValue === "undefined" || this.state.inputValue < 3 || this.state.inputValue > 10) {
			alert("Please enter a value greater than 3 and less than 10.");
		}
		else{
			this.props.newGame(this.state.inputValue, this.state.inputValue);
		}
	}

	onInputChange(event) {
		this.setState({inputValue: parseInt(event.target.value)});
	}
}