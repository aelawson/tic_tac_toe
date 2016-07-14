import * as GameTypes from '../constants/gametypes';
import { showOverlay, hideOverlay } from '../constants/styles';

export function getTileSize(boardDim) {
	var marginSize = 10;
	var boardSize = 500;
	var remSpace = boardSize - (boardDim * (marginSize * 2))
	var tileSize = remSpace / boardDim;
	return tileSize;
};

export function setStartGameOverlay(matchStatus) {
	if (matchStatus === GameTypes.NEW_GAME) {
		return showOverlay;
	}
	return hideOverlay;
};

export function setEndGameOverlay(matchStatus) {
	if (matchStatus === GameTypes.WINNER) {
		return showOverlay;
	}
	if (matchStatus === GameTypes.DRAW) {
		return showOverlay;
	}
	return hideOverlay;
};

export function setTileIcon(value) {
	if (value != null) {
		console.log(value);
		if (value === GameTypes.PLAYER_ONE) {
			return "fa-times";
		}
		return "fa-circle-o";
	}
	return "";
}

export function setTileClickable(context, value) {
	if (value != null) {
		return () => { "return false" };
	}
	return context.onClick.bind(context);
}

export function getTileStyle(size) {
	return {
		width: size + "px",
		height: size + "px"
	};
}