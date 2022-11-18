import { NavLink } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';
import styles from './ButtonSidenav.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const ButtonSidenav = ({ to = '', active = false, children }) => {
    const props = {
        to,
    };
    return (
        <NavLink className={cx('wrapper', { active: active })} {...props}>
            <span>
                <BsPlusLg />
            </span>
            {children}
        </NavLink>
    );
};

export default ButtonSidenav;
