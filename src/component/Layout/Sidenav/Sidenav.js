import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';
import styles from  './Sidenav.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Sidenav = () => {
    return (
        <nav>
            <div className={cx('container')}>
                <ul className={cx('nav__links')}>
                    <li className={cx('nav__active')}>
                        <NavLink className={cx('nav__item')}>
                            <span>
                                <BsPlusLg />
                            </span>
                            User
                        </NavLink>
                    </li>
                    <li className={cx('')}>
                        <NavLink className={cx('nav__item')}>
                            <span>
                                <BsPlusLg />
                            </span>
                            Nhóm quyền
                        </NavLink>
                    </li>
                    <li className={cx('')}>
                        <NavLink className={cx('nav__item')}>
                            <span>
                                <BsPlusLg />
                            </span>
                            Quản lý menu
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidenav;
