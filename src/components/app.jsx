import React from 'react';
import Board from './board';
import Info from './info';

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