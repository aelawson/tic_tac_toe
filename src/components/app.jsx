import React from 'react';
import Board from './board';
import Info from './info';
import { bindActionCreators } from 'redux';
import { makeMove, resetBoard, newGame } from '../actions/actions';

// @connect(state => ({
//     gameInfo: state.gameInfo
// }))
export default class App extends React.Component {
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