import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import ButtonMenu from '~/component/ButtonMenu/ButtonMenu';

const cx = classNames.bind(styles);
function Header() {
    // const [act, setactive] = useState(0);
    const location = useLocation();
    // const handleOnclick = (num) => {
    //     setactive(num);
    // };

    var listbtn = [
        { content: 'Quản Lý User', path: '/usermanagement/user' },
        { content: 'Quản Lý Server', path: '/servermanagement/regionserver' },
        { content: 'Quản Lý User VNP', path: '/uservnpmanagement/user' },
        { content: 'Quản Lý Source Code', path: '/sourcecodemanagement/module' },
    ];
    const Comp = listbtn.map((x, index) => {
        var localpath = location.pathname.split('/')[1];

        //console.log('local:', localpath, location.pathname.indexOf('/'), 'và', x.path, '=', x.path.includes(localpath));
        if (x.path.includes(localpath))
            return (
                <ButtonMenu to={x.path} key={index} active>
                    {x.content}
                </ButtonMenu>
            );
        return (
            <ButtonMenu to={x.path} key={index}>
                {x.content}
            </ButtonMenu>
        );
    });
    return (
        <header className={cx('wapper')}>
            <div className={cx('headertop')}>
                <img className={cx('logo_top')} src={require('~/images/logo_56.png')} />
                <div className={cx('searchbar')}>
                    <input placeholder="Vui lòng nhập tên menu" className={cx('searchbar__input')} type="text" />
                    <button className={cx('searchbar__searchbtn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </div>
                <div className={cx('headertop__menuright')}>
                    <span className={cx('paddingtext')}>Hi, Nghĩa</span>
                    <span> | </span>
                    <Link className={cx('paddingtext', 'Linkhover')}>
                        <span>Change Password</span>
                    </Link>
                    <span> | </span>
                    <Link className={cx('paddingtext', 'Linkhover')}>
                        <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>
                        <span className={cx('paddingtext')}>logout</span>
                    </Link>
                </div>
            </div>
            <div className={cx('headerborder')}>1</div>
            <div className={cx('headerbottom')}>{Comp}</div>
        </header>
    );
}

export default Header;
