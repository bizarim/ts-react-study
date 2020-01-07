import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoInput.module.scss';

const cx = classNames.bind(styles);

interface Props {
    value: string;
    onChange: (e: React.SyntheticEvent<Element, Event>) => void;
    onInsert: () => void;
}

const TodoInput: React.FC<Props> = ({ value, onChange, onInsert }) => {
    const haldeOnKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onInsert();
        }
    };

    return (
        <div className={cx('todo-input')}>
            <input
                value={value}
                onChange={onChange}
                onKeyPress={haldeOnKeyPress}
            />
            <div
                className={cx('todo-input')}
                onClick={onInsert}
            >추가</div>
        </div>
    );
};

export default TodoInput;
