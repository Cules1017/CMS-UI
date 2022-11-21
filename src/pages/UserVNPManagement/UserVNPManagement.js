import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import Content from '~/component/Layout/Content/Content';
import Table from '~/component/Layout/UI/Table/Table';

import { moduleUserVNP } from '~/routes';

import classNames from 'classnames/bind';
import styles from './UserVNPManagement.module.scss';
const cx = classNames.bind(styles);

function UserVNPManagement() {
    return (
        <div className={cx('menu-body')}>
            <Sidenav data={moduleUserVNP} />
            <Content>
                <Table />
            </Content>
        </div>
    );
}

export default UserVNPManagement;
