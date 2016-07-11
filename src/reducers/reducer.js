import * as ActionTypes from '../constants/actiontypes';
import * as GameTypes from '../constants/gametypes';
import _ from 'lodash';

const initialState = {
	board: null,
	boardDim: 0,
	currentMatch: 0,
	numMatches: 0,
	currentPlayer: GameTypes.PLAYER_ONE,
	gameStatus: GameTypes.NOT_WINNER
};

function createBoard(boardDim) {
	var rows = new Array(boardDim);
	for (var i = 0; i < boardDim; i++) {
		// Add array of size 'boardDim' to represent cols.
		rows[i] = new Array(boardDim);
	}
	return rows;
}

function isWinner(board, player) {
	return GameTypes.NOT_WINNER;
}

export default function gameInfo(state=initialState, action) {
	switch(action.type) {
		case ActionTypes.MAKE_MOVE:
			// Update board state.
			const tileId = action.payload.tileId;
			const player = action.payload.player;
			const board = _.cloneDeep(state.board);
			board[tileId] = player;
			// See if the current player is a winner.
			const result = isWinner(board, player);
			return {
				board: board,
				boardDim: state.boardDim,
				currentPlayer: state.currentPlayer,
				currentMatch: state.currentMatch,
				numMatches: state.numMatches,
				gameStatus: result
			};
		case ActionTypes.RESET_BOARD:
			// Return new board with same dimensions as before.
			return {
				board: createBoard(state.boardDim),
				boardDim: state.boardDim,
				currentPlayer: state.currentPlayer,
				currentMatch: state.currentMatch + 1,
				numMatches: state.numMatches
			};
		case ActionTypes.NEW_GAME:
			// Let player choose new game settings.
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