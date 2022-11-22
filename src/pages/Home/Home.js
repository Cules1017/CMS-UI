import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import Content from '~/component/Layout/Content/Content';
import HeaderContent from '~/component/HeaderContent/HeaderContent';
import Button from '~/component/Button/Button';

import { moduleUser } from '~/routes';

import classNames from 'classnames/bind';
import styles from './home.module.scss';
import TableDrag from '~/component/TableDrag/TableDrag';
import SelectAction from '~/component/SelectAction/SelectAction';
const cx = classNames.bind(styles);

function Home() {
    const columnDefs = [
        { field: 'ID', headerClass: cx('table__header'), rowDrag: true },
        { field: 'Fullname', headerClass: cx('table__header'), rowDrag: true },
        { field: 'Name', headerClass: cx('table__header'), rowDrag: true },
        { field: 'Group', headerClass: cx('table__header'), rowDrag: true },
        { field: 'CreateDate', headerClass: cx('table__header'), rowDrag: true },
        { field: 'Status', headerClass: cx('table__header'), rowDrag: true },
        { field: 'Operation', headerClass: cx('table__header'), cellRenderer: SelectAction, rowDrag: true },
    ];
    return (
        <div className={cx('menu-body')}>
            <Sidenav data={moduleUser} />
            <Content>
                <HeaderContent title="User">
                    <Button to="/usermanagement/user/add">Add</Button>
                </HeaderContent>
                <TableDrag columnheader={columnDefs}></TableDrag>
            </Content>
        </div>
    );
}

export default Home;
