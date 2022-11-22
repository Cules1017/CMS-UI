import { LeftSquareOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './TreeView.module.scss';
import { Tree } from 'antd';
const cx = classNames.bind(styles);
function TreeView({ dataTree = [] }) {
    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    return (
        <div className={cx('wrapper')}>
            <Tree showLine switcherIcon={<LeftSquareOutlined />} onSelect={onSelect} treeData={dataTree} />
        </div>
    );
}

export default TreeView;
