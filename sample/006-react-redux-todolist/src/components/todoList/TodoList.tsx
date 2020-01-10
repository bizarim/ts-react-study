import React from 'react';
import TodoItem from '../todoItem';
import { List } from 'immutable';

export interface TodoData {
    id: number;
    text: string;
    done: boolean;
}

export interface TodoListProps {
    todos: List<TodoData>;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {

    const todoList = todos.map(
        todo => (
            <TodoItem
                key={todo.id}
                done={todo.done}
                onToggle={() => onToggle(todo.id)}
                onRemove={() => onRemove(todo.id)}
            >{todo.text}
            </TodoItem>
        )
    );

    return (
        <div>
            {todoList}
        </div>
    );
};

export default TodoList;
