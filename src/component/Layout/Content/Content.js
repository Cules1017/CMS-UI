import Table from '../UI/Table/Table';
import Add from '../UI/Add/Add';
import HeaderContent from '~/component/HeaderContent/HeaderContent';
import ButtonAdd from '~/component/ButtonAdd/ButtonAdd';

import classNames from 'classnames/bind';
import styles from './Content.module.scss';
const cx = classNames.bind(styles);

const Content = ({ children }) => {
    return (
        <div className={cx('wapper')}>
            <HeaderContent title="User">
                <ButtonAdd>Add</ButtonAdd>
            </HeaderContent>
            {/* <Add></Add> */}
            {/* <Table /> */}
            {children}
        </div>
    );
};

export default Content;
