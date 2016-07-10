import chai from 'chai';

import * as actions from '../../src/actions/index.js';

describe('Actions', () => {
	describe('makeMove()', () => {
		it('should return a object with property "type"', () => {
		    chai.expect(actions.makeMove(null, null)).to.have.ownProperty('type');
		});
		it('should return a object with property "payload"', () => {
		    chai.expect(actions.makeMove(null, null)).to.have.ownProperty('payload');
		});
	});
});