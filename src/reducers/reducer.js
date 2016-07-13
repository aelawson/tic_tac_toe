import * as ActionTypes from '../constants/actiontypes';
import * as GameTypes from '../constants/gametypes';
import * as helpers from './helpers';
import _ from 'lodash';

export const initialState = {
	board: helpers.createBoard(5),
	boardDim: 5,
	currentMatch: 0,
	numMatches: 0,
	currentPlayer: GameTypes.PLAYER_ONE,
	matchStatus: GameTypes.NOT_WINNER
};

export default function reducer(state=initialState, action) {
	switch(action.type) {
		case ActionTypes.MAKE_MOVE:
			// Update board state (deep clone, immutable states).
			const tileId = action.payload.tileId;
			const player = action.payload.player;
			const board = _.cloneDeep(state.board);
			board[tileId] = player;
			const matchStatus = helpers.isWinner(board, state.boardDim, tileId, player)
			// See if the current player is a winner.
			console.log(board);
			console.log(matchStatus);
			return {
				board: board,
				boardDim: state.boardDim,
				currentPlayer: helpers.togglePlayer(state.currentPlayer),
				currentMatch: state.currentMatch,
				numMatches: state.numMatches,
				matchStatus: matchStatus
			};
		case ActionTypes.RESET_BOARD:
			// Return new board with same dimensions as before.
			return {
				board: helpers.createBoard(state.boardDim),
				boardDim: state.boardDim,
				currentPlayer: helpers.togglePlayer(state.currentPlayer),
				currentMatch: state.currentMatch + 1,
				numMatches: state.numMatches,
				matchStatus: GameTypes.NOT_WINNER
			};
		case ActionTypes.NEW_GAME:
			// Let player choose new game settings.
			return {
				board: helpers.createBoard(action.boardDim),
				boardDim: action.boardDim,
				currentPlayer: helpers.togglePlayer(state.currentPlayer),
				currentMatch: 1,
				numMatches: action.numMatches,
				matchStatus: GameTypes.NOT_WINNER
			};
		default:
			return state;
	}
}