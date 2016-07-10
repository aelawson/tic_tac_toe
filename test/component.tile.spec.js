import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'

import Tile from '../src/components/tile/tile.jsx';

chai.use(chaiEnzyme());

describe('Tile', () => {
	it('should contain a single <p> element', () => {
	    const wrapper = shallow(<Tile/>);
	    chai.expect(wrapper.find('p')).to.have.length.of(0);
	});
});