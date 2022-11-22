import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import Content from '~/component/Layout/Content/Content';
import HeaderContent from '~/component/HeaderContent/HeaderContent';
import Button from '~/component/Button/Button';
import Table from '~/component/Layout/UI/Table/Table';
import PaginationBot from '~/component/Pagination/PaginationBot';

import { moduleUser } from '~/routes';

import classNames from 'classnames/bind';
import styles from './GroupRule.module.scss';
const cx = classNames.bind(styles);

function GroupRule() {
    return (
        <div className={cx('menu-body')}>
            <Sidenav data={moduleUser} />
            <Content>
                <HeaderContent title="Nhóm quyền">
                    <Button to="/usermanagement/user/add">Add</Button>
                </HeaderContent>
                <Table />
                <PaginationBot />
            </Content>
        </div>
    );
}

export default GroupRule;
