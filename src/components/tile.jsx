import React from 'react';

require('./css/tile.css');

export default class Tile extends React.Component {
	render() {
		return (
			<div
				className="tile"
				onClick={this.handleClick.bind(this)}
			>
			</div>
		);
	}

	handleClick() {
		console.log(this.props.tileId);
	}
}