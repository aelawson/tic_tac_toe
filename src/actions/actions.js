import * as ActionTypes from '../constants/actiontypes';

export function makeMove(tileId, player) {
	return {
		type: ActionTypes.MAKE_MOVE,
		payload: { 
			tileId: tileId
		}
	};
}

export function resetBoard() {
	return {
		type: ActionTypes.RESET_BOARD,
		payload: { }
	};
}

export function newGame(boardDim) {
	return {
		type: ActionTypes.NEW_GAME,
		payload: { 
			boardDim: boardDim
		}
	};
}