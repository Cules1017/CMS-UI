import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import Content from '~/component/Layout/Content/Content';
import TreeView from '~/component/TreeView/TreeView';
import HeaderContent from '~/component/HeaderContent/HeaderContent';
import TableDrag from '~/component/TableDrag/TableDrag';
import classNames from 'classnames/bind';
import styles from './MenuManagement.module.scss';
import { moduleUser, MenuManagementList, MenuManagementInfocolumnDefs, treeData } from '~/Data/Data';
const cx = classNames.bind(styles);
function MenuManagement() {
    return (
        <div className={cx('menu-body')}>
            <Sidenav data={moduleUser} />
            <Content>
                <HeaderContent title="Quản Lý Menu"></HeaderContent>
                <div className={cx('wrapper_menu')}>
                    <TreeView dataTree={treeData} />
                    <TableDrag columnheader={MenuManagementInfocolumnDefs} rowData={MenuManagementList} />
                </div>
            </Content>
        </div>
    );
}

export default MenuManagement;
