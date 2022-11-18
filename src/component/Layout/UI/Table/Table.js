import classNames from 'classnames/bind';
import styles from './Table.module.scss';
const cx = classNames.bind(styles);

const Table = () => {
    return (
        <div className={cx('wapper')}>
            <table>
                <tr>
                    <th>No.</th>
                    <th>Fullname</th>
                    <th>Name</th>
                    <th>Group</th>
                    <th>Create Date</th>
                    <th>Status</th>
                    <th>Operation</th>
                </tr>
                <tr>
                    <td className={cx('a-center')}>1</td>
                    <td>Nguyen Van A</td>
                    <td>NVA</td>
                    <td>Admin</td>
                    <td className={cx('a-center')}>18/10/2022</td>
                    <td className={cx('a-center')}>Hoạt động</td>
                    <td className={cx('a-center')}>
                        <select>
                            <option>--Select--</option>
                            <option>Edit</option>
                            <option>Delete</option>
                        </select>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Table;
