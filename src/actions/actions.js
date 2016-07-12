import * as ActionTypes from '../constants/actiontypes';

export function makeMove(tileId, player) {
	console.log("In makeMove()");
	return {
		type: ActionTypes.MAKE_MOVE,
		payload: { 
			tileId: tileId,
			player: player
		}
	};
}

export function resetBoard() {
	return {
		type: ActionTypes.RESET_BOARD,
		payload: { }
	};
}

export function newGame(boardDim, numMatches) {
	return {
		type: ActionTypes.NEW_GAME,
		payload: { 
			boardDim: boardDim,
			numMatches: numMatches
		}
	};
}