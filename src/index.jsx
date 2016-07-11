import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import {render} from 'react-dom';
import { createStore } from 'redux';

import App from './components/app';
import reducer from './reducers/reducer';

require('./shared/css/index.css');

const store = createStore(reducer);

const TicTacToe = connect(
	function mapStateToProps(state) {
		return {
			gameInfo: state
		};
	},
	function mapDispatchToProps(dispatch) {
		return {
			makeMove: (tileId, player) => dispatch(makeMove(tileId, player)),
			resetBoard: () => dispatch(resetBoard()),
			newGame: (boardDim, numMatches) => dispatch(newGame(boardDim, numMatches))		
		};
	}
)(App);

render(
	<Provider store={store}>
		<TicTacToe/>
	</Provider>,
	document.getElementById('app')	
)