import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'

import App from '../src/components/app';

chai.use(chaiEnzyme());

describe('App', () => {
	it('should contain a single Info component', () => {
	    const wrapper = shallow(<App/>);
	    chai.expect(wrapper.find('Info')).to.have.length.of(1);
	});

	it('should contain a single Board component', () => {
	    const wrapper = shallow(<App/>);
	    chai.expect(wrapper.find('Board')).to.have.length.of(1);
	});
});