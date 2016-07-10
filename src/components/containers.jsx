import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions/actions';
import Board from './board';
import Tile from './board';

export const Board = connect(
	function mapStateToProps(state) {
		return {
			props: state
		};
	},
	function mapDispatchToProps(dispatch) {
		return {
			addTodo: text => dispatch(addTodo(text)),
			toggleTodo: id => dispatch(toggleTodo(id))
		};
	}
)(Board);

export const Tile = connect(
	function mapStateToProps(state) {
		return {
			props: state
		};
	},
	function mapDispatchToProps(dispatch) {
		return {
			addTodo: text => dispatch(addTodo(text)),
			toggleTodo: id => dispatch(toggleTodo(id))
		};
	}
)(Tile);