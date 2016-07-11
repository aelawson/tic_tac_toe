import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../src/reducers/reducer';

import App from '../src/components/app';

chai.use(chaiEnzyme());

describe('App', () => {
	it('should contain a single Info component', () => {
		const store = createStore(reducer);
		const wrapper = mount(
			<Provider store={store}>
				<App/>
			</Provider>
		);
	    chai.expect(wrapper.find('Info')).to.have.length.of(1);
	});

	it('should contain a single Board component', () => {
		const store = createStore(reducer);
		const wrapper = mount(
			<Provider store={store}>
				<App/>
			</Provider>
		);
	    chai.expect(wrapper.find('Board')).to.have.length.of(1);
	});
});