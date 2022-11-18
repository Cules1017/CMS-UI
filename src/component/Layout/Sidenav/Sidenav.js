import { useLocation } from 'react-router-dom';
import styles from './Sidenav.module.scss';
import classNames from 'classnames/bind';
import ButtonSidenav from '~/component/ButtonSidenav/ButtonSidenav';
const cx = classNames.bind(styles);

const Sidenav = () => {
    const location = useLocation();
    var listMenu = [
        { content: 'User', path: '/' },
        { content: 'Nhóm quyền', path: '/group' },
        { content: 'Quản lý menu', path: '/menu' },
    ];
    const Comp = listMenu.map((x, index) => {
        if (location.pathname === x.path)
            return (
                <ButtonSidenav to={x.path} key={index} active>
                    {x.content}
                </ButtonSidenav>
            );
        return (
            <ButtonSidenav to={x.path} key={index}>
                {x.content}
            </ButtonSidenav>
        );
    });
    return (
        <nav>
            <div className={cx('container')}>
                <ul className={cx('nav__links')}>
                    <li className={cx('')}>{Comp}</li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidenav;
