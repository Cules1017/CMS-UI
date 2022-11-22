import { LeftSquareOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './TreeView.module.scss';
import { Tree } from 'antd';
const cx = classNames.bind(styles);
function TreeView() {
    const treeData = [
        {
            title: 'Quản lý User',
            key: '0-0',
            children: [
                {
                    title: 'User',
                    key: '0-0-0',
                },
                {
                    title: 'Nhóm quyền',
                    key: '0-0-1',
                },
                {
                    title: 'Quản lý menu',
                    key: '0-0-2',
                },
            ],
        },
        {
            title: 'Quản lý Server',
            key: '0-0',
            children: [
                {
                    title: 'User',
                    key: '0-0-0',
                },
                {
                    title: 'Nhóm quyền',
                    key: '0-0-1',
                },
                {
                    title: 'Quản lý menu',
                    key: '0-0-2',
                },
            ],
        },
    ];
    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    return (
        <div className={cx('wrapper')}>
            <Tree
                showLine
                switcherIcon={<LeftSquareOutlined />}
                defaultExpandedKeys={['0-0-0']}
                onSelect={onSelect}
                treeData={treeData}
            />
        </div>
    );
}

export default TreeView;
