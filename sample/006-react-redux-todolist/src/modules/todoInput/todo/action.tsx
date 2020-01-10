
export const TODO_INSERT = 'TODO_INSERT';

export interface TodoInsertAction {
    type: typeof TODO_INSERT;
    payload: { value: string };
}

export const todoInsert = (value: string): TodoInsertAction => ({
    type: TODO_INSERT,
    payload: { value: value }
});

export const TODO_TOGGLE = 'TODO_TOGGLE';

export interface TodoToggleAction {
    type: typeof TODO_TOGGLE;
    payload: { id: number; };
}

export const todoToggle = (id: number): TodoToggleAction => ({
    type: TODO_TOGGLE,
    payload: { id: id }
});

export const TODO_REMOVE = 'TODO_REMOVE';

export interface TodoRemoveAction {
    type: typeof TODO_REMOVE;
    payload: { id: number; };
}

export const todoRemove = (id: number): TodoRemoveAction => ({
    type: TODO_REMOVE,
    payload: { id: id }
});

export type TodoActioin
    = TodoInsertAction
    | TodoToggleAction
    | TodoRemoveAction;