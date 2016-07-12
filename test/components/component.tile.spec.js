import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'

import Tile from '../src/components/tile';

chai.use(chaiEnzyme());

describe('Tile', () => {
	it('should render a single <div> container', () => {
	    const wrapper = shallow(<Tile/>);
	    chai.expect(wrapper.find('div')).to.have.length.of(1);
	});

	it('should render a single <p> element', () => {
	    const wrapper = shallow(<Tile/>);
	    chai.expect(wrapper.find('p')).to.have.length.of(1);
	});
});