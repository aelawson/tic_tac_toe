import * as GameTypes from '../constants/gametypes';

export const initialState = {
	board: createBoard(0),
	boardDim: 0,
	currentMatch: 0,
	numMoves: 1,
	currentPlayer: GameTypes.PLAYER_ONE,
	matchStatus: GameTypes.NEW_GAME
};

export function createBoard(boardDim) {
	// Create a 1D board of size boardDim * boardDim.
	const flatSize = boardDim * boardDim;
	var rows = new Array(flatSize);
	for (var i = 0; i < flatSize; i++) {
		rows[i] = null;
	}
	return rows;
}

export function togglePlayer(player) {
	if (player == GameTypes.PLAYER_ONE) {
		return GameTypes.PLAYER_TWO;
	}
	return GameTypes.PLAYER_ONE;
}

export function checkRow(board, boardDim, tileId, player) {
	// Find flattened bounds of the row containing tileId.
	// Iterate and return false if we find a non-matching value in the row - else return true.
	const colStart = Math.floor(tileId / boardDim) * boardDim;
	const colEnd = colStart + boardDim;
	for (var col = colStart; col < colEnd; col++) {
		if (board[col] !== player) {
			return false;
		}
	}
	return true;
}

export function checkCol(board, boardDim, tileId, player) {
	// Find flattened bounds of the col containing tileId.
	// Iterate and return false if we find a non-matching value in the col - else return true.
	const rowStart = tileId % boardDim;
	const rowEnd = boardDim * boardDim;
	for (var row = rowStart; row < rowEnd; row += boardDim) {
		if (board[row] !== player) {
			return false;
		}
	}
	return true;
}

export function checkDiag(board, boardDim, player) {
	// Find flattened bounds of the diag containing tileId.
	// Iterate and return false if we find a non-matching value in the diag - else return true;
	const diagIncr = boardDim + 1;
	const diagStart = 0;
	for (var i = diagStart; i < board.length; i += diagIncr) {
		if (board[i] !== player) {
			return false;
		}
	}
	return true;
}

export function checkRevDiag(board, boardDim, player) {
	// Find flattened bounds of the rev. diag containing tileId.
	// Iterate and return false if we find a non-matching value in the rev. diag - else return true;
	const diagIncr = boardDim - 1;
	const diagStart = board.length - boardDim;
	for (var i = diagStart; i >= boardDim - 1; i -= diagIncr) {
		if (board[i] !== player) {
			return false;
		}
	}
	return true;
}

export function onDiag(tileId, boardDim) {
	// Check if row / col indices are the same - if so, we are in the diagonal.
	const rowIndex = Math.floor(tileId / boardDim);
	const colIndex = tileId % boardDim;
	return (rowIndex === colIndex);
}

export function onRevDiag(tileId, boardDim) {
	// Check if row / col indices add to (boardDim - 1) - if so, we are in the rev. diagonal.
	const rowIndex = Math.floor(tileId / boardDim);
	const colIndex = tileId % boardDim;
	return (rowIndex + colIndex === boardDim - 1);
}

// Different than implementation in interview - found it easier to use a 1D array instead of 2D.
export function isWinner(board, boardDim, tileId, player, numMoves) {
	// We know the last move is either a winner or not,
	// so we only need to check the row/col/diag intersecting that space.
	if (checkRow(board, boardDim, tileId, player)) {
		return GameTypes.WINNER;
	}
	if (checkCol(board, boardDim, tileId, player)) {
		return GameTypes.WINNER;
	}
	if (onDiag(tileId, boardDim)) {
		if (checkDiag(board, boardDim, player)) {
			return GameTypes.WINNER;
		}	
	}
	if (onRevDiag(tileId, boardDim)) {
		if (checkRevDiag(board, boardDim, player)) {
			return GameTypes.WINNER;
		}
	}
	// If we've filled all spaces and didn't find a win, it's a draw.
	if (numMoves == board.length) {
		return GameTypes.DRAW;
	}
	return GameTypes.NOT_WINNER;
}