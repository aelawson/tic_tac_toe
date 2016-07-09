import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import Board from '../components/board.jsx';

describe('Board', () => {
	it('should contain a single <p> element', () => {
	    const wrapper = shallow(<Board/>);
	    expect(wrapper.find('p')).to.be.ok;
	});
});