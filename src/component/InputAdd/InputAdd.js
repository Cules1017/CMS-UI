import classNames from 'classnames/bind';
import styles from './InputAdd.module.scss';
const cx = classNames.bind(styles);

function InputAdd({ children, long = false, short = false, type = 'text', ...passprop }) {
    var props = { long, short };
    return <input type={type} className={cx('inputAdd', { ...props })} {...passprop}></input>;
}

export default InputAdd;
