import * as ActionTypes from '../constants/actiontypes';
import * as GameTypes from '../constants/gametypes';
import * as helpers from './helpers';
import _ from 'lodash';

export const initialState = {
	board: helpers.createBoard(3),
	boardDim: 3,
	currentMatch: 0,
	numMoves: 0,
	currentPlayer: GameTypes.PLAYER_ONE,
	matchStatus: GameTypes.NEW_GAME
};

export default function reducer(state=initialState, action) {
	switch(action.type) {
		case ActionTypes.MAKE_MOVE:
			// Update board state (deep clone, immutable states).
			const tileId = action.payload.tileId;
			const player = action.payload.player;
			const board = _.cloneDeep(state.board);
			board[tileId] = player;
			const matchStatus = helpers.isWinner(board, state.boardDim, tileId, player, state.numMoves)
			// See if the current player is a winner.
			console.log(board);
			console.log(matchStatus);
			return {
				board: board,
				boardDim: state.boardDim,
				currentPlayer: helpers.togglePlayer(state.currentPlayer),
				currentMatch: state.currentMatch,
				numMoves: state.numMoves,
				matchStatus: matchStatus
			};
		case ActionTypes.RESET_BOARD:
			// Return new board with same dimensions as before.
			return {
				board: helpers.createBoard(state.boardDim),
				boardDim: state.boardDim,
				currentPlayer: helpers.togglePlayer(state.currentPlayer),
				currentMatch: state.currentMatch + 1,
				numMoves: state.numMoves,
				matchStatus: GameTypes.NOT_WINNER
			};
		case ActionTypes.NEW_GAME:
			// Let player choose new game settings.
			return {
				board: helpers.createBoard(action.payload.boardDim),
				boardDim: action.payload.boardDim,
				currentPlayer: helpers.togglePlayer(state.currentPlayer),
				currentMatch: 1,
				numMoves: 0,
				matchStatus: GameTypes.NOT_WINNER
			};
		default:
			return state;
	}
}