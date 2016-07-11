import * as Types from '../constants/actiontypes';

const initialState = {
	board: createBoard(3),
	boardDim: null,
	currentMatch: null,
	numMatches: 3,
	currentPlayer: null
};

function createBoard(boardDim) {
	var rows = new Array(boardDim);
	for (var i = 0; i < boardDim; i++) {
		// Add array of size 'boardDim' to represent cols.
		rows[i] = new Array(boardDim);
	}

	return rows;
}

function tileIdToCoords(tileId) {
	return;
}

function makeMoveOnBoard(board, player, tileId) {
	return;
}

export default function gameInfo(state=initialState, action) {
	switch(action.type) {
		case Types.MAKE_MOVE:
			// TODO: Add logic for making a move.
			return state;
		case Types.RESET_BOARD:
			return {
				board: createBoard(state.boardDim),
				boardDim: state.boardDim,
				currentPlayer: state.currentPlayer,
				currentMatch: state.currentMatch + 1,
				numMatches: state.numMatches
			};
		case Types.NEW_GAME:
			return {
				board: createBoard(action.boardDim),
				boardDim: action.boardDim,
				currentPlayer: action.currentPlayer,
				currentMatch: 1,
				numMatches: action.numMatches
			};
		default:
			return state;
	}
}