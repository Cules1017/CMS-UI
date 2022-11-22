import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import Content from '~/component/Layout/Content/Content';
import classNames from 'classnames/bind';
import styles from './SourceCodeManagement.module.scss';
import { moduleSourceCode } from '~/Data/Data';
import TableDrag from '~/component/TableDrag/TableDrag';
const cx = classNames.bind(styles);

function SourceCodeManagement() {
    return (
        <div className={cx('menu-body')}>
            <Sidenav data={moduleSourceCode} />
            <Content>
                <TableDrag />
            </Content>
        </div>
    );
}

export default SourceCodeManagement;
