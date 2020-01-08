import * as types from './types';

export interface CreateCounterAction {
    type: typeof types.CREATE_COUNTER;
    payload: { color: string };
}

export const createCounter = (color: string): CreateCounterAction => ({
    type: types.CREATE_COUNTER,
    payload: { color: color },
});

export interface RemoveCounterAction {
    type: typeof types.REMOVE_COUNTER;
}

export const removeCounter = (): RemoveCounterAction => ({
    type: types.REMOVE_COUNTER,
});

export interface IncrementCounterAction {
    type: typeof types.INCREMENT_COUNTER;
    payload: { index: number };
}
export const incrementCounter = (index: number): IncrementCounterAction => ({
    type: types.INCREMENT_COUNTER,
    payload: { index: index }
});

export interface DecrementCounterAction {
    type: typeof types.DECREMENT_COUNTER;
    payload: { index: number };
}

export const decrementCounter = (index: number): DecrementCounterAction => ({
    type: types.DECREMENT_COUNTER,
    payload: { index: index }
});

export interface SetColorCounterAction {
    type: typeof types.SET_COLOR_COUNTER;
    payload: { index: number, color: string };
}

export const setColorCounter = (index: number, color: string): SetColorCounterAction => ({
    type: types.SET_COLOR_COUNTER,
    payload: { index: index, color: color }
});

export type CounterActionTypes = CreateCounterAction
    | RemoveCounterAction
    | IncrementCounterAction
    | DecrementCounterAction
    | SetColorCounterAction;