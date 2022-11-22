import classNames from 'classnames/bind';
import ButtonAdd from '~/component/Button/Button';
import InputAdd from '~/component/InputAdd/InputAdd';
import SelectAdd from '~/component/SelectAdd/SelectAdd';
import { GroupRuleList } from '~/Data/Data';
import styles from './Add.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Add({ data = {} }) {
    const form = data.map((i) => {
        let require = '';
        if (i.require) {
            require = <span className={cx('require_label')}>*</span>;
        }
        return (
            <tr>
                <td className={cx('tablefit__labelinputleft')}>
                    {require}
                    {i.label}
                </td>
                <td>
                    {i.tag.map((item) => {
                        return item;
                    })}
                </td>
            </tr>
        );
    });
    return (
        <div className={cx('wappwer')}>
            <table className={cx('tablefit')}>{form}</table>
        </div>
    );
}

export default Add;
