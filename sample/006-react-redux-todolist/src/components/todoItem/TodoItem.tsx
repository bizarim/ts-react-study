import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoItem.module.scss';

const cx = classNames.bind(styles);

export interface TodoItemProps {
    done: boolean;
    onToggle: () => void;
    onRemove: () => void;
}

const TodoItem: React.FC<TodoItemProps> = React.memo(({ children, done, onRemove, onToggle }) => {
    return (
        <div className={cx('todo-item')} onClick={onToggle}>
            <input className={cx('tick')} type='checkbox' checked={done} readOnly />
            <div className={cx('text', { done })}>{children}</div>
            <div className={cx('delete')} onClick={(e: React.SyntheticEvent) => {
                onRemove();
                /* propagation, 자식 -> 부모 순으로 메서드를 실행한다.
                   이걸 막아서 부모의 onClick을 실행하지 못하게 한다.
                */
                e.stopPropagation();
            }}>[지우기]</div>
        </div>
    );
});

export default TodoItem;
