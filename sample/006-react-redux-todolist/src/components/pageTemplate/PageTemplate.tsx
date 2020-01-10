import React from 'react';
import classNames from 'classnames/bind';
import styles from './PageTemplate.module.scss';

const cx = classNames.bind(styles);

interface Props {
}

const PageTemplate: React.FC<Props> = ({ children }) => {
    return (
        <div className={cx('page-template')}>
            <h1>일정 관리</h1>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    );
};

export default PageTemplate;
