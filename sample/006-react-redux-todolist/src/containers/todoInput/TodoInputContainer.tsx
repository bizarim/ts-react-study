import { Dispatch } from 'react';
import TodoInput from '../../components/todoInput';
import { connect } from 'react-redux';
import { AppState } from '../../modules/rootReducer';
import { InputAction, input } from '../../modules/todoInput/input/action';
import { TodoActioin, todoInsert } from '../../modules/todoInput/todo/action';

const mapStateToProps = (state: AppState) => ({
    value: state.inputReducer.value
});

const mapDispatchToProps = (dispatch: Dispatch<InputAction | TodoActioin>) => ({
    setInput: (value: string) => dispatch(input(value)),
    onInsert: (value: string) => dispatch(todoInsert(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
