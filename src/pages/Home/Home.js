import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import Content from '~/component/Layout/Content/Content';
import Add from '~/component/Layout/UI/Add/Add';
const cx = classNames.bind(styles);

function Home() {
    const dataUser = [
        {
            name: 'User',
            path: '/',
        },
        {
            name: 'Nhóm quyền',
            path: '/usermanagement/group',
        },
        {
            name: 'Quản lý menu',
            path: '/usermanagement/menu',
        },
    ];
    return (
        <div className={cx('menu-body')}>
            <Sidenav data={dataUser} />
            <Content>
                <Add />
            </Content>
        </div>
    );
}

export default Home;
