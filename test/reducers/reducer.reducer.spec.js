import chai from 'chai';

import * as GameTypes from '../../src/constants/gametypes';
import * as reducers from '../../src/reducers/reducer';

describe('Reducers', () => {
	describe('createBoard()', () => {
		it('should return a 2D array of size "boardDim"', () => {
			const boardDim = 10;
			const rows = reducers.createBoard(boardDim);
		    chai.expect(rows).to.have.length.of(10);
		    chai.expect(rows[0]).to.have.length.of(10);
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