import React from 'react';

require('./css/info.css');

export default class Info extends React.Component {
	render() {
		return (
			<div>
				<h1>Tic Tac Toe</h1>
				<h4>Num matches: { this.props.numMatches }</h4>
			</div>
		);
	}
}