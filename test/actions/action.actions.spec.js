import chai from 'chai';

import * as ActionTypes from '../../src/constants/actiontypes';
import * as GameTypes from '../../src/constants/gametypes';
import * as actions from '../../src/actions/actions';

describe('Actions', () => {
	describe('makeMove()', () => {
		it('should return a object with properties "type" and "payload"', () => {
			// Could split these into separate tests, but would be a bit verbose.
		    chai.expect(actions.makeMove(null, null)).to.have.property('type');
		    chai.expect(actions.makeMove(null, null)).to.have.property('payload');
		});
		it('should return a object with type "ActionType.MAKE_MOVE" and given payload.', () => {
			const expectedResult = {
				type: ActionTypes.MAKE_MOVE,
				payload: {
					tileId: 0
				}
			};
			const actionResult = actions.makeMove(0);
			chai.expect(actionResult).to.deep.equal(expectedResult);
		});
	});

	describe('resetBoard()', () => {
		it('should return a object with properties "type" and "payload"', () => {
			// Could split these into separate tests, but would be a bit verbose.
		    chai.expect(actions.resetBoard()).to.have.property('type');
		    chai.expect(actions.resetBoard()).to.have.property('payload');
		});
		it('should return a object with type "ActionType.RESET_BOARD" and empty payload.', () => {
			const expectedResult = {
				type: ActionTypes.RESET_BOARD,
				payload: { }
			};
			const actionResult = actions.resetBoard();
			chai.expect(actionResult).to.deep.equal(expectedResult);
		});
	});

	describe('newGame()', () => {
		it('should return a object with properties "type" and "payload"', () => {
			// Could split these into separate tests, but would be a bit verbose.
		    chai.expect(actions.newGame(null, null)).to.have.property('type');
		    chai.expect(actions.newGame(null, null)).to.have.property('payload');
		});
		it('should return a object with type "ActionType.NEW_GAME" and given payload.', () => {
			const expectedResult = {
				type: ActionTypes.NEW_GAME,
				payload: {
					boardDim: null
				}
			};
			const actionResult = actions.newGame(null);
			chai.expect(actionResult).to.deep.equal(expectedResult);
		});
	});
});