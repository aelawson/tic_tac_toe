import React from 'react';
import Board from './board';
import Info from './info';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeMove, resetBoard, newGame } from '../actions/actions';

export class App extends React.Component {
	render() {
		const {
			gameInfo: {
				board: board,
				boardDim: boardDim,
				currentMatch: currentMatch,
				numMatches: numMatches,
				currentPlayer: currentPlayer
			},
			dispatch
		} = this.props;

		return (
			<div>
				<Info
					currentPlayer = {currentPlayer}
					currentMatch = {currentMatch}
					numMatches = {numMatches}
				/>
				<Board
					board = {board}
					currentPlayer = {currentPlayer}
					makeMove = {makeMove}
					resetBoard = {resetBoard}
					newGame = {newGame}
				/>
			</div>
		);
	}
}

export default connect(
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