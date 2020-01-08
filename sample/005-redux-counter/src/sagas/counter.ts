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
    try {
        const { type, payload } = action;
        yield put({ type: type, payload: payload });
    } catch (e) {
        console.log(e);
    }
}

function* removeCounter$(action: RemoveCounterAction) {
    try {
        const { type } = action;
        yield put({ type: type });
    } catch (e) {
        console.log(e);
    }
}

function* incrementCounter$(action: IncrementCounterAction) {
    try {
        const { type, payload } = action;
        yield put({ type: type, payload: payload });
    } catch (e) {
        console.log(e);
    }
}

function* decrementCounter$(action: DecrementCounterAction) {
    try {
        const { type, payload } = action;
        yield put({ type: type, payload: payload });
    } catch (e) {
        console.log(e);
    }
}


function* setColorCounter$(action: SetColorCounterAction) {
    try {
        const { type, payload } = action;
        yield put({ type: type, payload: payload });
    } catch (e) {
        console.log(e);
    }
}
