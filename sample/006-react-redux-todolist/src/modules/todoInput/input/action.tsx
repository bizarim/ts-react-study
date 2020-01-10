
// [ Redux 만들기 ] step 1 : type과 action 정의

// 1. type 정의
export const INPUT = 'INPUT';

// 2. action 정의
export interface InputAction {
    type: typeof INPUT;
    payload: { value: string; };
}

export const input = (value: string): InputAction => ({
    type: INPUT,
    payload: { value: value }
});