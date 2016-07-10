import React from 'react';
import App from './components/app/app.jsx';
import {render} from 'react-dom';

require('./shared/css/index.css');

render(<App/>, document.getElementById('app'));