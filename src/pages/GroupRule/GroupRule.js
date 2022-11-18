import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import classNames from 'classnames/bind';
import styles from './GroupRule.module.scss';
import Content from '~/component/Layout/Content/Content';
import Table from '~/component/Layout/UI/Table/Table';
const cx = classNames.bind(styles);

function GroupRule() {
    return (
        <div className={cx('menu-body')}>
            <Sidenav />
            <Content>
                <Table></Table>
            </Content>
        </div>
    );
}

export default GroupRule;
