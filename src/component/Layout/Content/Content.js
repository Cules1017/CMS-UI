import Table from '../UI/Table/Table';
import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Add from '../UI/Add/Add';
import HeaderContent from '~/component/HeaderContent/HeaderContent';
import ButtonAdd from '~/component/ButtonAdd/ButtonAdd';
const cx = classNames.bind(styles);

const Content = () => {
    return (
        <div className={cx('wapper')}>
            <HeaderContent title="Add Infomation">
                <ButtonAdd>1111</ButtonAdd>
            </HeaderContent>
            <Add></Add>
        </div>
    );
};

export default Content;
