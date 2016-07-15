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

	describe('getEndGameMessage()', () => {
		it('should return "DRAW" given a GameType.DRAW"', () => {
			const expectedResult = GameTypes.DRAW;
			const actualResult = Helpers.getEndGameMessage(GameTypes.DRAW, GameTypes.PLAYER_ONE)
			chai.expect(actualResult).to.equal(expectedResult);
		});

		it('should return "GameTypes.PLAYER_TWO WINS!" given a non-draw GameType and GameTypes.PLAYER_ONE"', () => {
			const expectedResult = GameTypes.PLAYER_TWO + " WINS!";
			const actualResult = Helpers.getEndGameMessage(GameTypes.WINNER, GameTypes.PLAYER_ONE)
			chai.expect(actualResult).to.equal(expectedResult);
		});

		it('should return "GameTypes.PLAYER_ONE WINS!" given a non-draw GameType and GameTypes.PLAYER_TWO"', () => {
			const expectedResult = GameTypes.PLAYER_ONE + " WINS!";
			const actualResult = Helpers.getEndGameMessage(GameTypes.WINNER, GameTypes.PLAYER_TWO)
			chai.expect(actualResult).to.equal(expectedResult);
		});
	});

	describe('getTileStyle()', () => {
		it('should return an object with width and height properties', () => {
			const actualResult = Helpers.getTileStyle(100);
			chai.expect(actualResult).to.have.property("width");
			chai.expect(actualResult).to.have.property("height");
		});

		it('should return an object with width: 100px and height: 100px"', () => {
			const expectedResult = {
				width: "100px",
				height: "100px"
			};
			const actualResult = Helpers.getTileStyle(100);
			chai.expect(actualResult).to.deep.equal(expectedResult);
		});
	});

	describe('setTileIcon()', () => {
		it('should return GameTypes.PLAYER_ONE given a non-null value', () => {
			const actualResult = Helpers.setTileIcon(GameTypes.PLAYER_ONE);
			chai.expect(actualResult).to.equal(GameTypes.PLAYER_ONE);
		});

		it('should return GameTypes.PLAYER_TWO given a non-null value', () => {
			const actualResult = Helpers.setTileIcon(GameTypes.PLAYER_TWO);
			chai.expect(actualResult).to.equal(GameTypes.PLAYER_TWO);
		});

		it('should return "" given a null value', () => {
			const actualResult = Helpers.setTileIcon(null);
			chai.expect(actualResult).to.equal("");
		});
	});	
});