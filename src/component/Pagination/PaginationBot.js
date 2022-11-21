import React from 'react';
import { Pagination } from 'antd';

import classNames from 'classnames/bind';
import styles from './PaginationBot.module.scss';
const cx = classNames.bind(styles);

const PaginationBot = () => {
    return <Pagination defaultCurrent={1} total={30} className={cx('wrapper')} />;
};

export default PaginationBot;
