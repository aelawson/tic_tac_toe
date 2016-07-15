import chai from 'chai';

import * as GameTypes from '../../src/constants/gametypes';
import * as reducers from '../../src/reducers/reducer';
import * as Helpers from '../../src/helpers/reducerhelpers'

describe('Reducer Helpers', () => {
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

	describe('checkRow()', () => {
		it('should return true for a winning row"', () => {
			const board = [ "X", "X", "X", "O", "O", null, null, null, null ];
			const boardDim = 3;
			const tileId = 2;
			const player = GameTypes.PLAYER_ONE;
			const expectedResult = true;
			const actualResult = Helpers.checkRow(board, boardDim, tileId, player);
			chai.expect(actualResult).to.equal(expectedResult);
		});

		it('should return false for a non-winning row"', () => {
			const board = [ "O", "X", "X", "O", "O", "X", null, null, null ];
			const boardDim = 3;
			const tileId = 5;
			const player = GameTypes.PLAYER_ONE;
			const expectedResult = false;
			const actualResult = Helpers.checkRow(board, boardDim, tileId, player);
			chai.expect(actualResult).to.equal(expectedResult);
		});
	});

	describe('checkCol()', () => {
		it('should return true for a winning col"', () => {
			const board = [ "X", "X", "X", "O", "X", "O", "O", "X", "O" ];
			const boardDim = 3;
			const tileId = 7;
			const player = GameTypes.PLAYER_ONE;
			const expectedResult = true;
			const actualResult = Helpers.checkCol(board, boardDim, tileId, player);
			chai.expect(actualResult).to.equal(expectedResult);
		});

		it('should return false for a non-winning col"', () => {
			const board = [ "X", "X", "X", "O", "X", "X", "O", "O", "O" ];
			const boardDim = 3;
			const tileId = 5;
			const player = GameTypes.PLAYER_ONE;
			const expectedResult = false;
			const actualResult = Helpers.checkCol(board, boardDim, tileId, player);
			chai.expect(actualResult).to.equal(expectedResult);
		});
	});

	describe('checkDiag()', () => {
		it('should return true for a winning diag"', () => {
			const board = [ "X", "O", "O", null, "X", null, null, null, "X" ];
			const boardDim = 3;
			const tileId = 8;
			const player = GameTypes.PLAYER_ONE;
			const expectedResult = true;
			const actualResult = Helpers.checkDiag(board, boardDim, player);
			chai.expect(actualResult).to.equal(expectedResult);
		});

		it('should return false for a non-winning diag"', () => {
			const board = [ "X", "O", "O", null, "O", null, "X", null, "X" ];
			const boardDim = 3;
			const tileId = 8;
			const player = GameTypes.PLAYER_ONE;
			const expectedResult = false;
			const actualResult = Helpers.checkDiag(board, boardDim, player);
			chai.expect(actualResult).to.equal(expectedResult);
		});
	});

	describe('checkRevDiag()', () => {
		it('should return true for a winning reverse diagonal"', () => {
			// TODO: Implement test.
			chai.expect(true).to.equal(true);
		});

		it('should return false for a non-winning reverse diagonal"', () => {
			// TODO: Implement test.
			chai.expect(true).to.equal(true);
		});
	});
});