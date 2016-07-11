import React from 'react';
import Tile from './tile';

export default class Board extends React.Component {
	render() {
		return (
			<div id="board">
				{
					// Generate tiles for board.
					this.props.board.map((index) => {
						return (
							<Tile/>
						);
					})
				}
			</div>
		);
	}
}