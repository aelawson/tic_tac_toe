import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'

import Info from '../../src/components/info';
import { initialState } from '../../src/reducers/reducer';

chai.use(chaiEnzyme());

describe('Info', () => {
	it('should render a single <div> container', () => {
	    const wrapper = shallow(
			<Info
				currentPlayer = {initialState.currentPlayer}
				currentMatch = {initialState.currentMatch}
				numMatches = {initialState.numMatches}
			/>
	    );
	    chai.expect(wrapper.find('div')).to.have.length.of(1);
	});

	it('should render a single <h1> element (title)', () => {
	    const wrapper = shallow(
			<Info
				currentPlayer = {initialState.currentPlayer}
				currentMatch = {initialState.currentMatch}
				numMatches = {initialState.numMatches}
			/>
	    );
	    chai.expect(wrapper.find('h1')).to.have.length.of(1);
	});

	it('should render two <h4> elements', () => {
	    const wrapper = shallow(
			<Info
				currentPlayer = {initialState.currentPlayer}
				currentMatch = {initialState.currentMatch}
				numMatches = {initialState.numMatches}
			/>
	    );
	    chai.expect(wrapper.find('h1')).to.have.length.of(1);
	});
});