import { all, takeEvery, put } from 'redux-saga/effects';
import * as todo from './action';

// [ Redux 만들기 ] step 3: saga 작성
// saga 코루틴 작성

export default function* todoSaga() {
    yield all([
        takeEvery(todo.TODO_INSERT_REQUEST, todoInsert$),
        takeEvery(todo.TODO_TOGGLE, todoToggle$),
        takeEvery(todo.TODO_TOGGLE, todoRemove$),
    ]);
}

function* todoInsert$(action: todo.TodoInsertAction) {
    const { type, payload } = action;
    // yield null;
    console.log('!!!!!!!!!!!!!');
    console.log(type);
    console.log(payload);
    yield put({ type: todo.TODO_INSERT, payload: payload});
}

function* todoToggle$(action: todo.TodoInsertAction) {
    const { type, payload } = action;
    console.log(type);
    console.log(payload);
    return;
}

function* todoRemove$(action: todo.TodoInsertAction) {
    const { type, payload } = action;
    console.log(type);
    console.log(payload);
    return;
}
