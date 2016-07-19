import * as GameTypes from '../constants/gametypes';
import { togglePlayer } from './reducerhelpers';
import { showOverlay, hideOverlay } from '../constants/styles';

export function getTileSize(boardDim) {
	// Hardcoded, would ideally be tied to a variable.
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
		if (value === GameTypes.PLAYER_ONE) {
			return GameTypes.PLAYER_ONE;
		}
		return GameTypes.PLAYER_TWO;
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

export function getEndGameMessage(matchStatus, player) {
	if (matchStatus === GameTypes.DRAW) {
		return GameTypes.DRAW;
	}
	else {
		return togglePlayer(player) + " WINS!";
	}
}

export function isInvalidInput(input) {
	return (
		isNaN(input)
		|| input < 3
		|| input > 10
	);
}