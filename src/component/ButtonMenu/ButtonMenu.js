import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ButtonMenu.module.scss';
const cx = classNames.bind(styles);

function ButtonMenu({ to = '', active = false, children }) {
    const props = {
        to,
    };
    return (
        <Link className={cx('wapper', { active: active })} {...props}>
            <span>{children}</span>
        </Link>
    );
}

export default ButtonMenu;
