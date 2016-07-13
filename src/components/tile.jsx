import React from 'react';

require('./css/tile.css');

export function setTileValue(value) {
	if (value != null) {
		return value;
	}
	return "";
}

export function setTileClickable(context, value) {
	if (value != null) {
		return () => { "return false" };
	}
	return context.onClick.bind(context);
}

export default class Tile extends React.Component {
	render() {
		const tileSize = {
			width: this.props.tileSize + "px",
			height: this.props.tileSize + "px"
		};
		const tileClickEvent = setTileClickable(this, this.props.value);
		const tileValue = setTileValue(this.props.value);
		return (
			<div
				className="tile"
				onClick={tileClickEvent}
				style={tileSize}
			>
				<span className="tileValue">{tileValue}</span>
			</div>
		);
	}

	onClick() {
		this.props.makeMove(this.props.tileId, this.props.currentPlayer);
	}
}