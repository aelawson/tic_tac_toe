import React from 'react';
import Tile from './tile';

require('./css/board.css');

export function getTileSize(boardDim) {
	var marginSize = 10;
	var boardSize = 500;
	var remSpace = boardSize - (boardDim * (marginSize * 2))
	var tileSize = remSpace / boardDim;
	return tileSize;
};

export default class Board extends React.Component {
	render() {
		const tileSize = getTileSize(this.props.boardDim);
		return (
			<div id="board">
				{
					// Generate tiles for board.
					this.props.board.map((index) => {
						return (
							<Tile
								key = {index}
								tileId = {index}
								tileSize = {tileSize}
								currentPlayer = {this.props.currentPlayer}
								makeMove = {this.props.makeMove}
							/>
						);
					})
				}
			</div>
		);
	}
}