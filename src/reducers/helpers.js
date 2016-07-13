import * as GameTypes from '../constants/gametypes';

export function createBoard(boardDim) {
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
	const diagIncr = boardDim + 1;
	const diagStart = 0;
	for (var i = diagStart; i < board.length; i += diagIncr) {
		if (board[i] != player) {
			return false;
		}
	}
	return true;
}

export function checkRevDiag(board, boardDim, player) {
	const diagIncr = boardDim - 1;
	const diagStart = board.length - boardDim;
	for (var i = diagStart; i >= boardDim - 1; i -= diagIncr) {
		if (board[i] != player) {
			return false;
		}
	}
	return true;
}

export function onDiag(tileId, boardDim) {
	const rowIndex = Math.floor(tileId / boardDim);
	const colIndex = tileId % boardDim;
	return (rowIndex == colIndex);
}

export function onRevDiag(tileId, boardDim) {
	const rowIndex = Math.floor(tileId / boardDim);
	const colIndex = tileId % boardDim;
	return (rowIndex + colIndex == boardDim - 1);
}

// Different than implementation in interview - found it easier to use a 1D array instead of 2D.
export function isWinner(board, boardDim, tileId, player) {
	// We know the last move has to be a winner or not, so we can just check
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
	return GameTypes.NOT_WINNER;
}