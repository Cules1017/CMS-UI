import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import Content from '~/component/Layout/Content/Content';
import Table from '~/component/Layout/UI/Table/Table';

import { moduleSourceCode } from '~/routes';

import classNames from 'classnames/bind';
import styles from './SourceCodeManagement.module.scss';
const cx = classNames.bind(styles);

function SourceCodeManagement() {
    return (
        <div className={cx('menu-body')}>
            <Sidenav data={moduleSourceCode} />
            <Content>
                <Table />
            </Content>
        </div>
    );
}

export default SourceCodeManagement;
