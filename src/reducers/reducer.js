import * as ActionTypes from '../constants/actiontypes';
import * as GameTypes from '../constants/gametypes';
import { initialState } from '../helpers/reducerhelpers';
import * as Helpers from '../helpers/reducerhelpers';
import _ from 'lodash';

export default function reducer(state=initialState, action) {
	switch(action.type) {
		case ActionTypes.MAKE_MOVE:
			// Make a move and check if it causes a winning state.
			const newBoard = _.cloneDeep(state.board);
			newBoard[action.payload.tileId] = state.currentPlayer;
			const matchStatus = Helpers.isWinner(
				newBoard,
				state.boardDim,
				action.payload.tileId,
				state.currentPlayer,
				state.numMoves
			);
			return {
				board: newBoard,
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