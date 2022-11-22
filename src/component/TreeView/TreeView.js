import { LeftSquareOutlined } from '@ant-design/icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './TreeView.module.scss';
import { Tree } from 'antd';
const cx = classNames.bind(styles);
function TreeView() {
    const treeData = [
        {
            title: 'administration',
            key: '0-0',
            children: [
                {
                    title: 'Quản lý User',
                    key: '0-0-0',
                    children: [
                        {
                            title: 'User',
                            key: '0-0-0-0',
                        },
                        {
                            title: 'Nhóm quyền',
                            key: '0-0-0-1',
                        },
                        {
                            title: 'Quản lý menu',
                            key: '0-0-0-2',
                            children: [
                                {
                                    title: 'leaf',
                                    key: '0-0-0-2-0',
                                },
                                {
                                    title: 'leaf',
                                    key: '0-0-0-2-1',
                                },
                            ],
                        },
                    ],
                },
                {
                    title: 'Quản Lý Server',
                    key: '0-0-1',
                    children: [
                        {
                            title: 'leaf',
                            key: '0-0-1-0',
                        },
                    ],
                },
                {
                    title: 'parent 1-2',
                    key: '0-0-2',
                    children: [
                        {
                            title: 'leaf',
                            key: '0-0-2-0',
                        },
                        {
                            title: 'leaf',
                            key: '0-0-2-1',
                        },
                    ],
                },
            ],
        },
    ];
    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    return (
        <div className={cx('wapper')}>
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
