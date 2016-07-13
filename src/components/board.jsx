import React from 'react';
import Tile from './tile';
import * as GameTypes from '../constants/gametypes';

require('./css/board.css');

const hideEndGame = {
	display: "none"
};

const showEndGame = {
	display: "block"
};

export function getTileSize(boardDim) {
	var marginSize = 10;
	var boardSize = 500;
	var remSpace = boardSize - (boardDim * (marginSize * 2))
	var tileSize = remSpace / boardDim;
	return tileSize;
};

export function setEndGameStyle(matchStatus) {
	if (matchStatus === GameTypes.WINNER) {
		return showEndGame;
	}
	if (matchStatus === GameTypes.DRAW) {
		return showEndGame;
	}
	return hideEndGame;
};

export default class Board extends React.Component {
	render() {
		const tileSize = getTileSize(this.props.boardDim);
		//const startGameStyle = setstartGameStyle(this.props.matchStatus);
		const endGameStyle = setEndGameStyle(this.props.matchStatus);
		return (
			<div id="board">
				<div
					id = "endGameScreen"
					style = {endGameStyle}
				>
					<div id = "endGameInfo">
						<h2>
							{this.props.matchStatus}
						</h2>
						<button
							onClick = {this.props.resetBoard}
						>
							New Game
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
}