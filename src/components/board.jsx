import React from 'react';
import Tile from './tile';

require('./css/board.css');

export default class Board extends React.Component {
	render() {
		return (
			<div id="board">
				{
					// Generate tiles for board.
					this.props.board.map((tileId) => {
						return (
							<Tile
								tileId = {tileId}
								key = {tileId}
								makeMove = {this.props.makeMove}
							/>
						);
					})
				}
			</div>
		);
	}
}