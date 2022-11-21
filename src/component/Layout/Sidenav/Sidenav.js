import { useLocation } from 'react-router-dom';
import styles from './Sidenav.module.scss';
import classNames from 'classnames/bind';
import ButtonSidenav from '~/component/ButtonSidenav/ButtonSidenav';
const cx = classNames.bind(styles);

const Sidenav = ({ data = [] }) => {
    const location = useLocation();
    const links = data;
    const Comp = links.map((x, index) => {
        if (location.pathname === x.path)
            return (
                <ButtonSidenav to={x.path} key={index} active>
                    {x.name}
                </ButtonSidenav>
            );
        return (
            <ButtonSidenav to={x.path} key={index}>
                {x.name}
            </ButtonSidenav>
        );
    });
    return (
        <nav>
            <div className={cx('container')}>
                <ul className={cx('nav__links')}>
                    <li>{Comp}</li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidenav;
