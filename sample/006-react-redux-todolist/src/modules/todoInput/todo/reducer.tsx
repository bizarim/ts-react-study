import { List, Record } from 'immutable';   // 사용법 공부 해야함.
import { TodoActioin } from './action';

// [ Redux 만들기 ] step 2 : state 정의 및 reducer 작성

export interface TodoState {
    readonly id: number;
    readonly text: string;
    readonly done: boolean;
}

export type TodoListState = List<TodoState>;

const TodoStateFactory = Record<TodoState>({ id: 0, text: '', done: false });

// InitialState
const initialState: TodoListState = List([
    TodoStateFactory({ id: 0, text: '리액트 공부하기', done: true }),
    TodoStateFactory({ id: 1, text: '컴포넌트 스타일링 해보기', done: false })
]);

let id: number = 1;
const getId = () => { return ++id; };

const todoReducer = (state: TodoListState = initialState, action: TodoActioin): TodoListState => {
    console.log('todoReducer');
    switch (action.type) {
        case 'TODO_INSERT': {
            const newTodo = { id: getId(), text: action.payload.value, done: false };
            return state.push(TodoStateFactory(newTodo));
        }
        case 'TODO_TOGGLE': {
            const index = state.findIndex(todo => todo.id === action.payload.id);
            return state.updateIn([index, 'done'], done => !done);
        }
        case 'TODO_REMOVE': {
            const index = state.findIndex(todo => todo.id === action.payload.id);
            return state.delete(index);
        }
        default:
            return state;
    }
};

export default todoReducer;