import * as Types from '../constants/actiontypes';

export function makeMove(tileId, player) {
	return {
		type: Types.MAKE_MOVE,
		payload: { 
			tileId: tileId,
			player: player
		}
	};
}

export function resetBoard() {
	return {
		type: Types.RESET_BOARD,
		payload: { }
	};
}

export function newGame(boardDim, numMatches) {
	return {
		type: Types.NEW_GAME,
		payload: { 
			boardDim: boardDim,
			numMatches: numMatches
		}
	};
}