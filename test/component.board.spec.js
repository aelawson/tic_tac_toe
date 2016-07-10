import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'

import Board from '../src/components/board/board.jsx';

chai.use(chaiEnzyme());

describe('Board', () => {
	it('should contain a single <p> element', () => {
	    const wrapper = shallow(<Board/>);
	    chai.expect(wrapper.find('p')).to.have.length.of(0);
	});
});