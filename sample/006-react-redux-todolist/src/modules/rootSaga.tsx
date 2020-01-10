import { all, fork } from 'redux-saga/effects';
import todoSaga from './todoInput/todo/saga';
import inputSaga from './todoInput/input/saga';

// [ Redux 만들기 ] step 5: saga 등록
// saga 등록

export default function* rootSaga() {
    yield all([
        fork(inputSaga),
        fork(todoSaga),
    ]);
}
