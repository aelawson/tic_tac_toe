import React from 'react';
import { shallow, mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'

import Info from '../../src/components/info';
import * as GameTypes from '../../src/constants/gametypes';
import { initialState } from '../../src/helpers/reducerhelpers';

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
			/>
	    );
	    chai.expect(wrapper.find('h1')).to.have.length.of(1);
	});

	it('should render two <h4> elements (props)', () => {
	    const wrapper = shallow(
			<Info
				currentPlayer = {initialState.currentPlayer}
				currentMatch = {initialState.currentMatch}
				numMatches = {initialState.numMatches}
			/>
	    );
	    chai.expect(wrapper.find('h4')).to.have.length.of(2);
	});

	it('should have defined "currentPlayer" and "currentMatch" props', () => {
	    const wrapper = mount(
			<Info
				currentPlayer = {initialState.currentPlayer}
				currentMatch = {initialState.currentMatch}
			/>
	    );
	    chai.expect(wrapper.props().currentPlayer).to.not.be.undefined;
	    chai.expect(wrapper.props().currentMatch).to.not.be.undefined;
	});

	it('should have "currentPlayer" prop equal to "X"', () => {
	    const wrapper = mount(
			<Info
				currentPlayer = {initialState.currentPlayer}
				currentMatch = {initialState.currentMatch}
			/>
	    );
	    chai.expect(wrapper.props().currentPlayer).to.equal(GameTypes.PLAYER_ONE);
	});

	it('should have "currentMatch" prop equal to 0', () => {
	    const wrapper = mount(
			<Info
				currentPlayer = {initialState.currentPlayer}
				currentMatch = {initialState.currentMatch}
			/>
	    );
	    chai.expect(wrapper.props().currentMatch).to.equal(0);
	});
});