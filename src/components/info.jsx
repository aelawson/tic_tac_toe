import React from 'react';

require('./css/info.css');

export default class Info extends React.Component {
	render() {
		return (
			<div>
				<h1 id="title">Tic Tac Toe</h1>
				<h4 id="currentPlayer">Current player: { this.props.currentPlayer }</h4>
				<h4 id="currentMatch">Current match: { this.props.currentMatch }</h4>
			</div>
		);
	}
}