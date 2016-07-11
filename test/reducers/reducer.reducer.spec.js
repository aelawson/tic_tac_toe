import chai from 'chai';

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
});