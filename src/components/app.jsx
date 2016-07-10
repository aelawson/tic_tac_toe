import React from 'react';
import Board from './board';
import Info from './info';
import { connect } from 'react-redux';
import { makeMove, resetBoard, newGame } from '../actions/actions';

class App extends React.Component {
	render() {
		return (
			<div>
				<Info/>
				<Board/>
			</div>
		);
	}
}

export default connect(
	function mapStateToProps(state) {
		return {
			props: state
		};
	},
	function mapDispatchToProps(dispatch) {
		return {
			makeMove: (tileId, currentPlayer) => dispatch(makeMove(tileId, currentPlayer)),
			resetBoard: () => dispatch(resetBoard()),
			newGame: (boardDim, numMatches) => dispatch(newGame(boardDim, numMatches))
		};
	}
)(App);