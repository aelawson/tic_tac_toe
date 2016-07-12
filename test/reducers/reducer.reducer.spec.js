import chai from 'chai';

import * as GameTypes from '../../src/constants/gametypes';
import * as reducers from '../../src/reducers/reducer';

describe('Reducers', () => {
	describe('createBoard()', () => {
		it('should return a 1D, flattened array of size "boardDim"^2', () => {
			const boardDim = 10;
			const board = reducers.createBoard(boardDim);
		    chai.expect(board).to.have.length.of(boardDim * boardDim);
		});
	});

	describe('isWinner()', () => {
		it('should return a non-winning result given the board and player"', () => {
			const expectedResult = GameTypes.NOT_WINNER;
			const board = reducers.createBoard(5);
			const actualResult = reducers.isWinner(board, GameTypes.PLAYER_ONE);
			chai.expect(actualResult).to.equal(expectedResult);
		});
	});
});