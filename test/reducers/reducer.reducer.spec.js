import chai from 'chai';
import * as ActionTypes from '../../src/constants/actiontypes';
import * as GameTypes from '../../src/constants/gametypes';
import * as Helpers from '../../src/helpers/reducerhelpers';
import reducer from '../../src/reducers/reducer';
import _ from 'lodash';

describe('Reducers', () => {
	it('should return expected state for a given MAKE_MOVE action"', () => {
		const action = {
			type: ActionTypes.MAKE_MOVE,
			payload: { 
				tileId: 0
			}
		};
		const state = Helpers.initialState;
		const newBoard = _.cloneDeep(state.board);
		newBoard[action.payload.tileId] = state.currentPlayer;
		const matchStatus = Helpers.isWinner(
			newBoard,
			state.boardDim,
			action.payload.tileId,
			state.currentPlayer,
			state.numMoves
		);
		const expectedResult = {
			board: newBoard,
			boardDim: state.boardDim,
			currentPlayer: Helpers.togglePlayer(state.currentPlayer),
			currentMatch: state.currentMatch,
			numMoves: state.numMoves + 1,
			matchStatus: matchStatus
		};
		const actualResult = reducer(state, action);
		chai.expect(expectedResult).to.deep.equal(actualResult);
	});
	it('should return expected state for a given RESET_BOARD action"', () => {
		const action = {
			type: ActionTypes.RESET_BOARD,
			payload: { }
		};
		const state = Helpers.initialState;
		const expectedResult = {
			board: Helpers.createBoard(state.boardDim),
			boardDim: state.boardDim,
			currentPlayer: state.currentPlayer,
			currentMatch: state.currentMatch + 1,
			numMoves: 1,
			matchStatus: GameTypes.NOT_WINNER
		};
		const actualResult = reducer(state, action);
		chai.expect(expectedResult).to.deep.equal(actualResult);
	});
	it('should return expected state for a given NEW_GAME action"', () => {
		const action = {
			type: ActionTypes.NEW_GAME,
			payload: {
				boardDim: 5
			}
		};
		const state = Helpers.initialState;
		const expectedResult = {
			board: Helpers.createBoard(action.payload.boardDim),
			boardDim: action.payload.boardDim,
			currentPlayer: state.currentPlayer,
			currentMatch: 1,
			numMoves: 1,
			matchStatus: GameTypes.NOT_WINNER
		};
		const actualResult = reducer(state, action);
		chai.expect(expectedResult).to.deep.equal(actualResult);
	});
	it('should return current state for an unmatched (default) action"', () => {
		const action = {
			type: "Random String",
			payload: { }
		};
		const state = Helpers.initialState;
		const actualResult = reducer(state, action);
		chai.expect(state).to.deep.equal(actualResult);
	});
});