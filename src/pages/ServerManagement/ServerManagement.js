import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import Content from '~/component/Layout/Content/Content';
import Table from '~/component/Layout/UI/Table/Table';

import { moduleServer } from '~/routes';

import classNames from 'classnames/bind';
import styles from './ServerManagement.module.scss';
const cx = classNames.bind(styles);

function ServerManagement() {
    return (
        <div className={cx('menu-body')}>
            <Sidenav data={moduleServer} />
            <Content>
                <Table />
            </Content>
        </div>
    );
}

export default ServerManagement;