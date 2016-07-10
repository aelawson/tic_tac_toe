import * as Types from '../constants/actiontypes';

export function makeMove(tileId, player) {
	// TODO: Action for making a move
	return {
		type: Types.MAKE_MOVE,
		payload: { 
			tileId: tileId,
			player: player
		}
	};
}

export function resetBoard() {
	// TODO: Action for resetting the board.
	return {
		type: Types.RESET_BOARD,
		payload: { }
	};
}

export function newGame(boardDim, numMatches) {
	// TODO: Action for starting a new game.
	return {
		type: Types.NEW_GAME,
		payload: { 
			boardDim: boardDim,
			numMatches: numMatches
		}
	};
}