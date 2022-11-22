import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import Content from '~/component/Layout/Content/Content';
import HeaderContent from '~/component/HeaderContent/HeaderContent';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import Add from '~/component/Layout/UI/Add/Add';
import { moduleUser } from '~/Data/Data';
const cx = classNames.bind(styles);

function HomeEdit() {
    return (
        <div className={cx('menu-body')}>
            <Sidenav data={moduleUser} />
            <Content>
                <HeaderContent title="Edit User"></HeaderContent>
                <Add />
            </Content>
        </div>
    );
}

export default HomeEdit;
