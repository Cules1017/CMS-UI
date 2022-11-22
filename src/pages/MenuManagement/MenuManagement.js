import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import Content from '~/component/Layout/Content/Content';
import TreeView from '~/component/TreeView/TreeView';
import HeaderContent from '~/component/HeaderContent/HeaderContent';
import TableDrag from '~/component/TableDrag/TableDrag';
import { moduleUser } from '~/routes';

import SelectAction from '~/component/SelectAction/SelectAction';

import classNames from 'classnames/bind';
import styles from './MenuManagement.module.scss';
const cx = classNames.bind(styles);

function MenuManagement() {
    const columnDefs = [
        {
            field: 'ID',
            headerClass: cx('table__header'),
            cellClassRules: { table__body: 'value !== undefined' },
            rowDrag: true,
        },
        {
            field: 'Fullname',
            headerClass: cx('table__header'),
            cellClassRules: { table__body: 'value !== undefined' },
            rowDrag: true,
        },
        {
            field: 'Name',
            headerClass: cx('table__header'),
            cellClassRules: { table__body: 'value !== undefined' },
            rowDrag: true,
        },
        {
            field: 'Group',
            headerClass: cx('table__header'),
            cellClassRules: { table__body: 'value !== undefined' },
            rowDrag: true,
        },
        {
            field: 'CreateDate',
            headerClass: cx('table__header'),
            cellClassRules: { table__body: 'value !== undefined' },
            rowDrag: true,
        },
        {
            field: 'Status',
            headerClass: cx('table__header'),
            cellClassRules: { table__body: 'value !== undefined' },
            rowDrag: true,
        },
        {
            field: 'Operation',
            headerClass: cx('table__header'),
            cellClassRules: { table__body: 'value !== undefined' },
            cellRenderer: SelectAction,
            rowDrag: true,
        },
    ];
    return (
        <div className={cx('menu-body')}>
            <Sidenav data={moduleUser} />
            <Content>
                <HeaderContent title="Quản Lý Menu"></HeaderContent>
                <div className={cx('wrapper_menu')}>
                    <TreeView />
                    <TableDrag columnheader={columnDefs} />
                </div>
            </Content>
        </div>
    );
}

export default MenuManagement;
