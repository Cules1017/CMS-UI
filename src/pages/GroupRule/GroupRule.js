import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import Content from '~/component/Layout/Content/Content';
import HeaderContent from '~/component/HeaderContent/HeaderContent';
import Button from '~/component/Button/Button';
import classNames from 'classnames/bind';
import styles from './GroupRule.module.scss';
import TableDrag from '~/component/TableDrag/TableDrag';
import { GroupRulecolumnDefs, GroupRuleList, moduleUser } from '~/Data/Data';
const cx = classNames.bind(styles);

function GroupRule() {
    return (
        <div className={cx('menu-body')}>
            <Sidenav data={moduleUser} />
            <Content>
                <HeaderContent title="Nhóm quyền">
                    <Button to="/usermanagement/user/add">Add</Button>
                </HeaderContent>
                <TableDrag columnheader={GroupRulecolumnDefs} rowData={GroupRuleList}></TableDrag>
            </Content>
        </div>
    );
}

export default GroupRule;
