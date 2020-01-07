import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate/PageTemplate';
import TodoInput from './TodoInput';
import TodoList, { TodoListData } from './TodoList/TodoList';

interface Props { }
interface State {
    input: string;
    todos: Array<TodoListData>;
}

let id: number = 1;
const getId = () => { return ++id; };

const App: React.FC<Props> = () => {
    const [state, setState] = useState<State>({
        input: '',
        todos: [
            { id: 0, text: '리액트 공부하기', done: true },
            { id: 1, text: '컴포넌트 스타일링 해보기', done: false }
        ]
    });

    const handleChange = (e: React.SyntheticEvent) => {
        const { value } = e.target as HTMLInputElement;
        setState({
            input: value,
            todos: [...state.todos]
        });
    };

    const handleInsert = () => {
        if (state.input === '') return;
        // 새 데이터 객체 만들기
        const newTodo: TodoListData = {
            id: getId(),
            text: state.input,
            done: false
        };

        setState({
            input: '',
            todos: [...state.todos, newTodo]
        });
    };
    const handleToggle = (id: number) => {
        // id로 배열의 인덱스를 찾습니다.

        const index = state.todos.findIndex(todo => todo.id === id);

        // 찾은 데이터의 done 값을 반전시킵니다.
        const toggled: TodoListData = {
            ...state.todos[index],
            done: !state.todos[index].done
        };

        // slice를 사용하여 우리가 찾은 index 전후의 데이터들을 복사합니다.
        // 그리고 그 사이에는 변경된 todo 객체를 넣어줍니다.
        setState({
            input: '',
            todos: [
                ...state.todos.slice(0, index),
                toggled,
                ...state.todos.slice(index + 1)
            ]
        });
    };
    const handleRemove = (id: number) => {
        const index = state.todos.findIndex(todo => todo.id === id);
        setState({
            input: '',
            todos: [
                ...state.todos.slice(0, index),
                ...state.todos.slice(index + 1)
            ]
        });
    };

    return (
        <div>
            <PageTemplate>
                <TodoInput
                    onChange={handleChange}
                    onInsert={handleInsert}
                    value={state.input}
                />
                <TodoList
                    todos={state.todos}
                    onToggle={handleToggle}
                    onRemove={handleRemove}
                />
            </PageTemplate>
        </div>
    );
};

export default App;
