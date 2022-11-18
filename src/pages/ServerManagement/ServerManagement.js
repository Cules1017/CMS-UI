import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import classNames from 'classnames/bind';
import styles from './ServerManagement.module.scss';
import Content from '~/component/Layout/Content/Content';
import Add from '~/component/Layout/UI/Add/Add';
const cx = classNames.bind(styles);

function ServerManagement() {
    const dataServer = [
        {
            name: 'Region Server',
            path: '/servermanagement/regionserver',
        },
        {
            name: 'EPG Server',
            path: '/servermanagement/epgserver',
        },
        {
            name: 'Core Server',
            path: '/servermanagement/coreserver',
        },
    ];
    return (
        <div className={cx('menu-body')}>
            <Sidenav data={dataServer} />
            <Content>
                <Add />
            </Content>
        </div>
    );
}

export default ServerManagement;
