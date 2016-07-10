import React from 'react';
import Board from '../board/board';
import Info from '../info/info.jsx';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Info/>
				<Board/>
			</div>
		);
	}
}