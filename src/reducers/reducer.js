import * as ActionTypes from '../constants/actiontypes';
import * as GameTypes from '../constants/gametypes';
import { initialState } from '../helpers/reducerhelpers';
import * as Helpers from '../helpers/reducerhelpers';
import _ from 'lodash';

export default function reducer(state=initialState, action) {
	switch(action.type) {
		case ActionTypes.MAKE_MOVE:
			// Return new board with new move.
			const tileId = action.payload.tileId;
			const player = action.payload.player;
			// Update board state (deep clone, immutable states).
			const board = _.cloneDeep(state.board);
			// Make move and see if the player is a winner.
			board[tileId] = player;
			const matchStatus = Helpers.isWinner(board, state.boardDim, tileId, player, state.numMoves)
			return {
				board: board,
				boardDim: state.boardDim,
				currentPlayer: Helpers.togglePlayer(state.currentPlayer),
				currentMatch: state.currentMatch,
				numMoves: state.numMoves + 1,
				matchStatus: matchStatus
			};
		case ActionTypes.RESET_BOARD:
			// Return new board with same dimensions as before.
			return {
				board: Helpers.createBoard(state.boardDim),
				boardDim: state.boardDim,
				currentPlayer: state.currentPlayer,
				currentMatch: state.currentMatch + 1,
				numMoves: 1,
				matchStatus: GameTypes.NOT_WINNER
			};
		case ActionTypes.NEW_GAME:
			// Let player choose new game settings.
			return {
				board: Helpers.createBoard(action.payload.boardDim),
				boardDim: action.payload.boardDim,
				currentPlayer: state.currentPlayer,
				currentMatch: 1,
				numMoves: 1,
				matchStatus: GameTypes.NOT_WINNER
			};
		default:
			return state;
	}
}