import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import Content from '~/component/Layout/Content/Content';
import Table from '~/component/Layout/UI/Table/Table';

import { moduleUser } from '~/routes';

import classNames from 'classnames/bind';
import styles from './MenuManagement.module.scss';
const cx = classNames.bind(styles);

function MenuManagement() {
    return (
        <div className={cx('menu-body')}>
            <Sidenav data={moduleUser} />
            <Content>
                <Table />
            </Content>
        </div>
    );
}

export default MenuManagement;
