import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import Content from '~/component/Layout/Content/Content';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('menu-body')}>
            <Sidenav />
            <Content />
        </div>
    );
}

export default Home;
