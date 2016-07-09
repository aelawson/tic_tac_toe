import React from 'react';
import Board from './board.jsx';
import Tile from './tile.jsx';
import {render} from 'react-dom';

class App extends React.Component {
	render() {
		return (
			<div>
				<p>Tic Tac Toe</p>
				<Board/>
				<Tile/>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));