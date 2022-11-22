import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import Content from '~/component/Layout/Content/Content';
import classNames from 'classnames/bind';
import styles from './UserVNPManagement.module.scss';
import { moduleUserVNP } from '~/Data/Data';
import TableDrag from '~/component/TableDrag/TableDrag';
const cx = classNames.bind(styles);

function UserVNPManagement() {
    return (
        <div className={cx('menu-body')}>
            <Sidenav data={moduleUserVNP} />
            <Content>
                <TableDrag />
            </Content>
        </div>
    );
}

export default UserVNPManagement;
