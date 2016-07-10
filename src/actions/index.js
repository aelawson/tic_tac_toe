
export function makeMove(id, player) {
	// TODO: Code for making a move on the board.
	return {
		type: 'MAKE_MOVE',
		payload: { 
			id: id,
			player: player
		}
	};
}