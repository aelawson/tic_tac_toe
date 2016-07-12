import React from 'react';
import Board from './board';
import Info from './info';
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
					boardDim = {boardDim}
					currentPlayer = {currentPlayer}
					makeMove = {this.props.makeMove}
					resetBoard = {this.props.resetBoard}
					newGame = {this.props.newGame}
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
	{
		makeMove,
		resetBoard,
		newGame
	}
)(App);