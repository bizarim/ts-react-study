import { takeLatest, all, call, put, take } from 'redux-saga/effects';
import * as types from '../actions/types';
import {
    CreateCounterAction,
    RemoveCounterAction,
    IncrementCounterAction,
    DecrementCounterAction,
    SetColorCounterAction
} from '../actions/counter';


export default function* counterSaga() {
    yield all([
        takeLatest(types.CREATE_COUNTER, createCounter$),
        takeLatest(types.REMOVE_COUNTER, removeCounter$),
        takeLatest(types.INCREMENT_COUNTER, incrementCounter$),
        takeLatest(types.DECREMENT_COUNTER, decrementCounter$),
        takeLatest(types.SET_COLOR_COUNTER, setColorCounter$),
    ]);
}

function* createCounter$(action: CreateCounterAction) {
    const { type, payload } = action;
    console.log(type);
}

function* removeCounter$(action: RemoveCounterAction) {
    const { type } = action;
    console.log(type);
}

function* incrementCounter$(action: IncrementCounterAction) {
    const { type, payload } = action;
    console.log(type);
}

function* decrementCounter$(action: DecrementCounterAction) {
    const { type, payload } = action;
    console.log(type);
}

function* setColorCounter$(action: SetColorCounterAction) {
    const { type, payload } = action;
    console.log(type);
}
