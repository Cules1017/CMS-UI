import classNames from 'classnames/bind';
import styles from './SelectAdd.module.scss';
const cx = classNames.bind(styles);
function SelectAdd({ long = false, short = false, data, ...passprops }) {
    var dataselect = data;

    const Comp = dataselect.map((item, index) => {
        return (
            <option key={index + 1} value={index + 1}>
                {item}
            </option>
        );
    });
    var classes = { long, short };
    return (
        <select className={cx('SelectAdd', { ...classes })} {...passprops}>
            <option value="0">--Select--</option>
            {Comp}
        </select>
    );
}

export default SelectAdd;
