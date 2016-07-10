import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import {render} from 'react-dom';

import App from './components/app/app';
import reducer from './reducers/reducer';

require('./shared/css/index.css');

const store = createStore(reducer);

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);