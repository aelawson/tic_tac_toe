import React from 'react';

require('./css/tile.css');

export function setTileValue(value, player) {
	if (value == null) {
		return player;
	}
	return value;
}

export default class Tile extends React.Component {
	render() {
		const tileStyle = {
			width: this.props.tileSize + "px",
			height: this.props.tileSize + "px"
		};
		return (
			<div
				className="tile"
				onClick={this.onClick.bind(this)}
				style={tileStyle}
			>
				<span>{ setTileValue(this.props.value, this.props.currentPlayer) }</span>
			</div>
		);
	}

	onClick() {
		this.props.makeMove(this.props.tileId, this.props.currentPlayer);
	}
}