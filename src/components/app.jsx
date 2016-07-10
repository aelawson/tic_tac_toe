import React from 'react';
import Board from './board.jsx';
import Tile from './tile.jsx';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Tic Tac Toe</h1>
				<Board/>
				<Tile/>
			</div>
		);
	}
}