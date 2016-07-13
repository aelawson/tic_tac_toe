import React from 'react';
import { reduxForm } from 'redux-form'
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
						<form>
							<div>
								<label>Board Size</label>
								<div>
									<input type="text" placeholder="Default is 3..."/>
								</div>
							</div>
							<div>
								<button onClick={this.onClickNewGame.bind(this)}>
									New Game
								</button>
							</div>
						</form>
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

	onClickNewGame() {
		this.props.newGame(3, 3);
	}

	onInputChange() {
		this
	}
}