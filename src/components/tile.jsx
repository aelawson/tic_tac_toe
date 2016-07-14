import React from 'react';
import * as Helpers from '../helpers/componenthelpers';

require('./css/tile.css');

export default class Tile extends React.Component {
	render() {
		const tileStyle = Helpers.getTileStyle(this.props.tileSize);
		const tileClickEvent = Helpers.setTileClickable(this, this.props.value);
		const tileIcon = Helpers.setTileIcon(this.props.value);
		return (
			<div
				className="tile"
				onClick={tileClickEvent}
				style={tileStyle}
			>
				<span className={tileIcon}></span>
			</div>
		);
	}

	onClick() {
		this.props.makeMove(this.props.tileId, this.props.currentPlayer);
	}
}