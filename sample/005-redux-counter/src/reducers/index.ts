import { combineReducers } from 'redux';
import counter, { CounterState } from './counter';

export interface RootState {
    counter: CounterState;
}

const rootReducer = combineReducers({
    counter,
});

export default rootReducer;