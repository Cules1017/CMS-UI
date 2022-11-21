import classNames from 'classnames/bind';
import styles from './HeaderContent.module.scss';
const cx = classNames.bind(styles);
function HeaderContent({ title = '', children }) {
    return (
        <div className={cx('wrapper')}>
            <h2>
                {title}
                <span className={cx('a-right')}>{children}</span>
            </h2>
        </div>
    );
}

export default HeaderContent;
