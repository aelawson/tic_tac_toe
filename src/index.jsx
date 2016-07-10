import React from 'react';
<<<<<<< HEAD
import { Provider } from 'react-redux'
import { createStore } from 'redux';
=======
import App from './components/app';
>>>>>>> 472a17d14f48f5964f443d591a1b9ac4ac389171
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