import React from 'react';
import Tile from './tile';
import { togglePlayer } from '../helpers/reducerhelpers';
import * as GameTypes from '../constants/gametypes';
import * as Helpers from '../helpers/componenthelpers';

require('./css/board.css');

export default class Board extends React.Component {
	// Use local state for controlling input form.
	constructor(props) {
		super(props);
		this.state = {inputValue: this.props.boardDim};
	}

	render() {
		const tileSize = Helpers.getTileSize(this.props.boardDim);
		const startGameStyle = Helpers.setStartGameOverlay(this.props.matchStatus);
		const endGameStyle = Helpers.setEndGameOverlay(this.props.matchStatus);
		return (
			<div id="board">
				<div className="gameOverlay" style={startGameStyle}>
					<div className="gameOverlayInfo">
						<h2>
							Welcome to Tic-Tac-Toe!
						</h2>
						<div>
							<label>Board Size</label>
							<div>
								<input type="number" min="3" max="10" value={this.state.inputValue} onChange={this.onInputChange.bind(this)}/>
							</div>
						</div>
						<div>
							<button onClick={this.onClickNewGame.bind(this)}>
								New Game
							</button>
						</div>
					</div>
				</div>
				<div className="gameOverlay" style={endGameStyle}>
					<div className="gameOverlayInfo">
						<h2>
							{Helpers.getEndGameMessage(this.props.matchStatus, this.props.currentPlayer)}
						</h2>
						<button onClick={this.props.resetBoard}>
							Rematch
						</button>
					</div>
				</div>
				{
					// Generate tiles for board.
					this.props.board.map((value, index) => {
						return (
							<Tile
								key = {index}
								tileId = {index}
								tileSize = {tileSize}
								currentPlayer = {this.props.currentPlayer}
								value = {value}
								makeMove = {this.props.makeMove}
							/>
						);
					})
				}
			</div>
		);
	}

	onClickNewGame() {
		if (Helpers.isInvalidInput(this.state.inputValue)) {
			alert("Please enter a value greater than 3 and less than 10.");
		}
		else {
			this.props.newGame(this.state.inputValue, this.state.inputValue);
		}
	}

	onInputChange(event) {
		this.setState({inputValue: parseInt(event.target.value)});
	}
}