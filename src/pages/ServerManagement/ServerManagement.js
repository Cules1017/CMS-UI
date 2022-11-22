import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import Content from '~/component/Layout/Content/Content';
import classNames from 'classnames/bind';
import styles from './ServerManagement.module.scss';
import { moduleServer } from '~/Data/Data';
import TableDrag from '~/component/TableDrag/TableDrag';
const cx = classNames.bind(styles);

function ServerManagement() {
    return (
        <div className={cx('menu-body')}>
            <Sidenav data={moduleServer} />
            <Content>
                <TableDrag></TableDrag>
            </Content>
        </div>
    );
}

export default ServerManagement;
