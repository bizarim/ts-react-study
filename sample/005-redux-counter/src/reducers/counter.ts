import { CounterActionTypes } from '../actions/counter';
import * as types from '../actions/types';

export type CounterState = Readonly<Array<{ color: string; number: number; }>>;

const initState: CounterState = [{ color: 'black', number: 0 }];

const counterReducer = (counters: CounterState = initState, action: CounterActionTypes): CounterState => {

    switch (action.type) {
        case types.CREATE_COUNTER:
            return [
                ...counters,
                { color: action.payload.color, number: 0 }
            ];
        case types.REMOVE_COUNTER:
            return counters.slice(0, counters.length - 1);
        case types.INCREMENT_COUNTER:
            return [
                ...counters.slice(0, action.payload.index), // 선택한 인덱스의 전 아이템들
                {
                    ...counters[action.payload.index], // 기존 객체에
                    number: counters[action.payload.index].number + 1 // 새 number 값 덮어쓰기
                },
                ...counters.slice(action.payload.index + 1, counters.length) // 선택한 인덱스의 다음 아이템들
            ];
        case types.DECREMENT_COUNTER:
            return [
                ...counters.slice(0, action.payload.index), // 선택한 인덱스의 전 아이템들
                {
                    ...counters[action.payload.index], // 기존 객체에
                    number: counters[action.payload.index].number - 1 // 새 number 값 덮어쓰기
                },
                ...counters.slice(action.payload.index + 1, counters.length) // 선택한 인덱스의 다음 아이템들
            ];
        case types.SET_COLOR_COUNTER:
            return [
                ...counters.slice(0, action.payload.index), // 선택한 인덱스의 전 아이템들
                {
                    ...counters[action.payload.index], // 기존 객체에
                    color: action.payload.color // 새 color 값 덮어쓰기
                },
                ...counters.slice(action.payload.index + 1, counters.length) // 선택한 인덱스의 다음 아이템들
            ];
        default:
            return counters;
    }
};

export default counterReducer;