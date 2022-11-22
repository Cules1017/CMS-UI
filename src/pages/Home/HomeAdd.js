import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import Content from '~/component/Layout/Content/Content';
import HeaderContent from '~/component/HeaderContent/HeaderContent';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import Add from '~/component/Layout/UI/Add/Add';
import { moduleUser, DataAddUserForm } from '~/Data/Data';
const cx = classNames.bind(styles);

function HomeAdd() {
    return (
        <div className={cx('menu-body')}>
            <Sidenav data={moduleUser} />
            <Content>
                <HeaderContent title="Add User"></HeaderContent>
                <Add data={DataAddUserForm} />
            </Content>
        </div>
    );
}

export default HomeAdd;
