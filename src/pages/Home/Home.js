import Sidenav from '~/component/Layout/Sidenav/Sidenav';
import Content from '~/component/Layout/Content/Content';
import HeaderContent from '~/component/HeaderContent/HeaderContent';
import Button from '~/component/Button/Button';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import TableDrag from '~/component/TableDrag/TableDrag';
import { moduleUser, userInFo, UserInfocolumnDefs } from '~/Data/Data';
import SearchBar from '~/component/SearchBar/SearchBar';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('menu-body')}>
            <Sidenav data={moduleUser} />
            <Content>
                <HeaderContent title="User">
                    <Button to="/usermanagement/user/add">Add</Button>
                </HeaderContent>
                <SearchBar />
                <TableDrag columnheader={UserInfocolumnDefs} rowData={userInFo}></TableDrag>
            </Content>
        </div>
    );
}

export default Home;
