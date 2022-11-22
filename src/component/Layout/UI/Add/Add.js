import ButtonAdd from '~/component/Button/Button';
import InputAdd from '~/component/InputAdd/InputAdd';
import SelectAdd from '~/component/SelectAdd/SelectAdd';

import { GroupRuleList } from '~/Data/Data';

import styles from './Add.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Add() {
    let datarulelist = GroupRuleList.map((i) => {
        return i.GroupName;
    });
    return (
        <div className={cx('wappwer')}>
            <table className={cx('tablefit')}>
                <tr>
                    <td className={cx('tablefit__labelinputleft')}>
                        <span className={cx('require_label')}>*</span>
                        Fullname
                    </td>
                    <td>
                        <InputAdd long />
                    </td>
                </tr>
                <tr>
                    <td className={cx('tablefit__labelinputleft')}>
                        <span className={cx('require_label')}>*</span>
                        Username
                    </td>
                    <td>
                        <InputAdd long />
                    </td>
                </tr>
                <tr>
                    <td className={cx('tablefit__labelinputleft')}>VASC Mail</td>
                    <td>
                        <InputAdd long />
                    </td>
                </tr>
                <tr>
                    <td className={cx('tablefit__labelinputleft')}>Alt Mail</td>
                    <td>
                        <InputAdd long />
                    </td>
                </tr>
                <tr>
                    <td className={cx('tablefit__labelinputleft')}>
                        <span className={cx('require_label')}>*</span>
                        Password
                    </td>
                    <td>
                        <InputAdd short type="password" />
                    </td>
                </tr>
                <tr>
                    <td className={cx('tablefit__labelinputleft')}>
                        <span className={cx('require_label')}>*</span>
                        Confirm Password
                    </td>
                    <td>
                        <InputAdd short type="password" />
                    </td>
                </tr>
                <tr>
                    <td className={cx('tablefit__labelinputleft')}>
                        <span className={cx('require_label')}>*</span>
                        Group
                    </td>
                    <td>
                        <SelectAdd long data={datarulelist}></SelectAdd>
                    </td>
                </tr>
                <tr>
                    <td className={cx('tablefit__labelinputleft')}></td>
                    <td>
                        <ButtonAdd>Save</ButtonAdd>
                        <ButtonAdd>Reset</ButtonAdd>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Add;
