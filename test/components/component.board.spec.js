import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'

import Board from '../../src/components/board';
import { getTileSize } from '../../src/components/board';
import { initialState } from '../../src/helpers/reducerhelpers';
import * as Helpers from '../../src/helpers/reducerhelpers';

chai.use(chaiEnzyme());

describe('Board', () => {
	it('should render a single <div> container', () => {
	    const wrapper = shallow(
			<Board
				board = {initialState.board}
				currentPlayer = {initialState.currentPlayer}
				makeMove = {initialState.makeMove}
				resetBoard = {initialState.resetBoard}
				newGame = {initialState.newGame}
			/>
	    );
	    chai.expect(wrapper.find('#board')).to.have.length.of(1);
	});

	it('should render "n * n" Tile components', () => {
		const n = 10;
		const board = Helpers.createBoard(n);
	    const wrapper = shallow(
			<Board
				board = {board}
				currentPlayer = {initialState.currentPlayer}
				makeMove = {initialState.makeMove}
				resetBoard = {initialState.resetBoard}
				newGame = {initialState.newGame}
			/>
	    );
	    chai.expect(wrapper.find('Tile')).to.have.length.of(n * n);
	});

	it('should get a tile size given "boardDim"', () => {
		// Not stable
		const expectedTileSize = 360 / 7;
		const actualTileSize = getTileSize(7);
	    chai.expect(actualTileSize).to.equal(expectedTileSize);
	});
});