import { Dispatch } from 'react';
import TodoList from '../../components/todoList';
import { connect } from 'react-redux';
import { AppState } from '../../modules/rootReducer';
import { TodoActioin, todoToggle, todoRemove } from '../../modules/todoInput/todo/action';

const mapStateToProps = (state: AppState) => ({
    todos: state.todoReducer
});

const mapDispatchToProps = (dispatch: Dispatch<TodoActioin>) => ({
    onToggle: (id: number) => dispatch(todoToggle(id)),
    onRemove: (id: number) => dispatch(todoRemove(id))
});

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
