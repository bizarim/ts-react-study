import { Dispatch } from 'react';
import {} from 'redux';
import TodoInput from '../../components/todoInput';
import { connect } from 'react-redux';
import { AppState } from '../../modules/rootReducer';
import { InputAction, input } from '../../modules/todoInput/input/action';
import { TodoInsertRQAction, todoInsert, todoInsertRQ } from '../../modules/todoInput/todo/action';

const mapStateToProps = (state: AppState) => ({
    value: state.inputReducer.value
});

const mapDispatchToProps = (dispatch: Dispatch<InputAction | TodoInsertRQAction>) => ({
    setInput: (value: string) => dispatch(input(value)),
    onInsert: (value: string) => dispatch(todoInsertRQ(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
