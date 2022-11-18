import Table from '../UI/Table/Table';
import classNames from 'classnames/bind';
import styles from './Content.module.scss';
const cx = classNames.bind(styles);

const Content = () => {
    return (
        <div className={cx('wapper')}>
            <Table />
        </div>
    );
};

export default Content;
