import React from 'react';
import Board from '../board/board.jsx';
import Tile from '../tile/tile.jsx';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Board/>
				<Tile/>
			</div>
		);
	}
}