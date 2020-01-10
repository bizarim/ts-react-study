import { combineReducers } from 'redux';
import inputReducer from './todoInput/input/reducer';
import todoReducer from './todoInput/todo/reducer';

// [ Redux 만들기 ] step 4: reducer 등록
// reducer 등록

const rootReducer = combineReducers({
    inputReducer,
    todoReducer
});
export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;