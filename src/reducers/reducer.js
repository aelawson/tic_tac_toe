import * as ActionTypes from '../constants/actiontypes';
import * as GameTypes from '../constants/gametypes';
import _ from 'lodash';

export const initialState = {
	board: createBoard(3),
	boardDim: 3,
	currentMatch: 0,
	numMatches: 0,
	currentPlayer: GameTypes.PLAYER_ONE,
	matchStatus: GameTypes.NOT_WINNER
};

export function createBoard(boardDim) {
	const flatSize = boardDim * boardDim;
	var rows = new Array(flatSize);
	for (var i = 0; i < flatSize; i++) {
		// Add array of size 'boardDim' to represent cols.
		rows[i] = i;
	}
	return rows;
}

export function togglePlayer(player) {
	if (player == GameTypes.PLAYER_ONE) {
		return GameTypes.PLAYER_TWO;
	}
	return GameTypes.PLAYER_ONE;
}

export function isWinner(board, player) {
	return GameTypes.NOT_WINNER;
}

export default function reducer(state=initialState, action) {
	console.log("In reducer");
	switch(action.type) {
		case ActionTypes.MAKE_MOVE:
			// Update board state (deep clone, immutable states).
			const tileId = action.payload.tileId;
			const player = action.payload.player;
			const board = _.cloneDeep(state.board);
			board[tileId] = player;
			// See if the current player is a winner.
			return {
				board: state.board,
				boardDim: state.boardDim,
				currentPlayer: togglePlayer(state.currentPlayer),
				currentMatch: state.currentMatch,
				numMatches: state.numMatches,
				matchStatus: isWinner(board, player)
			};
		case ActionTypes.RESET_BOARD:
			// Return new board with same dimensions as before.
			return {
				board: createBoard(state.boardDim),
				boardDim: state.boardDim,
				currentPlayer: state.currentPlayer,
				currentMatch: state.currentMatch + 1,
				numMatches: state.numMatches,
				matchStatus: GameTypes.NOT_WINNER
			};
		case ActionTypes.NEW_GAME:
			// Let player choose new game settings.
			return {
				board: createBoard(action.boardDim),
				boardDim: action.boardDim,
				currentPlayer: action.currentPlayer,
				currentMatch: 1,
				numMatches: action.numMatches,
				matchStatus: GameTypes.NOT_WINNER
			};
		default:
			return state;
	}
}