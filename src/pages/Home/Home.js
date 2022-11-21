import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import Content from '~/component/Layout/Content/Content';
import HeaderContent from '~/component/HeaderContent/HeaderContent';
import Button from '~/component/Button/Button';
import Table from '~/component/Layout/UI/Table/Table';
import PaginationBot from '~/component/Pagination/PaginationBot';

import { moduleUser } from '~/routes';

import classNames from 'classnames/bind';
import styles from './home.module.scss';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('menu-body')}>
            <Sidenav data={moduleUser} />
            <Content>
                <HeaderContent title="User">
                    <Button>Add</Button>
                </HeaderContent>
                <Table />
                <PaginationBot />
            </Content>
        </div>
    );
}

export default Home;
