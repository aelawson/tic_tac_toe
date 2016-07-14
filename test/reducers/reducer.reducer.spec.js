import chai from 'chai';

import * as GameTypes from '../../src/constants/gametypes';
import * as reducers from '../../src/reducers/reducer';
import * as Helpers from '../../src/helpers/reducerhelpers';

describe('Reducers', () => {
	describe('Helpers', () => {
		describe('createBoard()', () => {
			it('should return a 1D, flattened array of size "boardDim"^2', () => {
				const boardDim = 10;
				const board = Helpers.createBoard(boardDim);
			    chai.expect(board).to.have.length.of(boardDim * boardDim);
			});
		});

		describe('isWinner()', () => {
			it('should return a winning result given a winning play"', () => {
				const expectedResult = GameTypes.WINNER;
				const board = [ "X", "X", "X", "O", "O", null, null, null, null ];
				const actualResult = Helpers.isWinner(board, 3, 2, GameTypes.PLAYER_ONE);
				chai.expect(actualResult).to.equal(expectedResult);
			});

			it('should return a non-winning result given a non-winning play"', () => {
				const expectedResult = GameTypes.NOT_WINNER;
				const board = [ "X", "X", null, "O", "O", null, null, null, null ]
				const actualResult = Helpers.isWinner(board, 3, 4, GameTypes.PLAYER_TWO);
				chai.expect(actualResult).to.equal(expectedResult);
			});
		});
	});
});