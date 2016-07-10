import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'

import App from '../src/components/app.jsx';

chai.use(chaiEnzyme());

describe('App', () => {
	it('should contain a single <h1> tag', () => {
	    const wrapper = shallow(<App/>);
	    chai.expect(wrapper.find('h1')).to.have.length.of(1);
	});

	it('should contain a single Board component', () => {
	    const wrapper = shallow(<App/>);
	    chai.expect(wrapper.find('Board')).to.have.length.of(1);
	});

	it('should contain a single Tile component', () => {
	    const wrapper = shallow(<App/>);
	    chai.expect(wrapper.find('Tile')).to.have.length.of(1);
	});
});