import chai from 'chai';

import * as GameTypes from '../../src/constants/gametypes';
import * as Helpers from '../../src/helpers/componenthelpers'

describe('Component Helpers', () => {
	describe('isInvalidInput()', () => {
		it('should return false for 3 <= x <= 10"', () => {
			const expectedResult = false;
			const actualResult = Helpers.isInvalidInput(5);
			chai.expect(actualResult).to.equal(expectedResult);
		});

		it('should return true for x < 3"', () => {
			const expectedResult = true;
			const actualResult = Helpers.isInvalidInput(2);
			chai.expect(actualResult).to.equal(expectedResult);
		});

		it('should return true for x > 10"', () => {
			const expectedResult = true;
			const actualResult = Helpers.isInvalidInput(12);
			chai.expect(actualResult).to.equal(expectedResult);
		});

		it('should return true for a NaN input"', () => {
			const expectedResult = true;
			const actualResult = Helpers.isInvalidInput(parseInt(""));
			chai.expect(actualResult).to.equal(expectedResult);
		});
	});
});