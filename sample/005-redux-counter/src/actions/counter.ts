import * as types from './types';

export interface CreateCounterAction {
    type: typeof types.CREATE_COUNTER;
    payload: { color: string };
}

export interface RemoveCounterAction {
    type: typeof types.REMOVE_COUNTER;
}

export interface IncrementCounterAction {
    type: typeof types.INCREMENT_COUNTER;
    payload: { index: number };
}
export interface DecrementCounterAction {
    type: typeof types.DECREMENT_COUNTER;
    payload: { index: number };
}

export interface SetColorCounterAction {
    type: typeof types.SET_COLOR_COUNTER;
    payload: { index: number, color: string };
}

export type CounterActionTypes = CreateCounterAction
    | RemoveCounterAction
    | IncrementCounterAction
    | DecrementCounterAction
    | SetColorCounterAction;