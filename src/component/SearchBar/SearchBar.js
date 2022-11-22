import styles from './SearchBar.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button/Button';
import SelectAdd from '../SelectAdd/SelectAdd';
import { GroupRuleList } from '~/Data/Data';
import InputAdd from '../InputAdd/InputAdd';
const cx = classNames.bind(styles);

function SearchBar() {
    let datarulelist = GroupRuleList.map((i) => {
        return i.GroupName;
    });
    return (
        <div className={cx('wrapper')}>
            <table className={cx('table_styles')}>
                <tr>
                    <td>
                        <span className={cx('right', 'padding')}>Group:</span>
                    </td>
                    <td>
                        <span className={cx('left')}>
                            <SelectAdd data={datarulelist} />
                        </span>
                    </td>
                    <td>
                        <span className={cx('right')}>UserName:</span>
                    </td>
                    <td>
                        <span className={cx('left')}>
                            {' '}
                            <InputAdd />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <Button>Tìm Kiếm</Button>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default SearchBar;
