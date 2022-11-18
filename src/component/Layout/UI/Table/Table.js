import { userInFo } from '~/routes';
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
                {userInFo.map(({ id, fullname, name, group, createDate, status }, index) => {
                    return (
                        <tr key={index}>
                            <td className={cx('a-center')}>{id}</td>
                            <td>{fullname}</td>
                            <td>{name}</td>
                            <td>{group}</td>
                            <td className={cx('a-center')}>{createDate}</td>
                            <td className={cx('a-center')}>{status}</td>
                            <td className={cx('a-center')}>
                                <select>
                                    <option>--Select--</option>
                                    <option>Edit</option>
                                    <option>Delete</option>
                                </select>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default Table;
