import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'

import Tile from '../../src/components/tile';

chai.use(chaiEnzyme());

describe('Tile', () => {
	it('should render a single <div> container', () => {
	    const wrapper = shallow(<Tile/>);
	    chai.expect(wrapper.find('.tile')).to.have.length.of(1);
	});
});