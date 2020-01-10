import { InputAction } from './action';

// [ Redux 만들기 ] step 2 : state 정의 및 reducer 작성

// 1. state 정의
export type InputState = {
    /**
     * todo input value
     */
    readonly value: string;
};

// 2. reducer 작성
/**
 * todoInputReducer
 * @param state todo input state
 * @param action todo input action
 */
const inputReducer = (state: InputState = { value: '' }, action: InputAction): InputState => {
    switch (action.type) {
        case 'INPUT':
            return { value: action.payload.value };
        default:
            return state;
    }
};

export default inputReducer;