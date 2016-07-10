import * as Types from '../constants/actiontypes';

const initialState = {
	board: null,
	boardDim: null,
	numMatches: null,
	currentPlayer: null
};

export function createBoard(boardDim) {
	var rows = new Array(boardDim);
	for (var i = 0; i < boardDim; i++) {
		// Add array of size 'boardDim' to represent cols.
		rows[i] = new Array(boardDim);
	}

	return rows;
}

export function tileIdToCoords(tileId) {
	return;
}

export function makeMoveOnBoard(board, player, tileId) {
	return;
}

export function reducer(state=initialState, action) {
	switch(action) {
		case Types.MAKE_MOVE:
			// TODO: Add logic for making a move.
		case Types.RESET_BOARD:
			// TODO: Add logic for resetting the board.
			return {
				board: createBoard(state.boardDim),
				boardDim: state.boardDim,
				numMatches: state.numMatches
			};
		case Types.NEW_GAME:
			// TODO: Add logic for starting a new game.
			return {
				board: createBoard(action.boardDim),
				boardDim: action.boardDim,
				numMatches: action.numMatches
			};
		default:
			return state;
	}
}