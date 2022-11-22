import classNames from 'classnames/bind';
import SelectAction from '~/component/SelectAction/SelectAction';
import styles from './Data.module.scss';
const cx = classNames.bind(styles);

export const moduleUser = [
    {
        name: 'User',
        path: '/usermanagement/user',
    },
    {
        name: 'Nhóm quyền',
        path: '/usermanagement/group',
    },
    {
        name: 'Quản lý menu',
        path: '/usermanagement/menu',
    },
];

export const moduleServer = [
    {
        name: 'Region Server',
        path: '/servermanagement/regionserver',
    },
    {
        name: 'EPG Server',
        path: '/servermanagement/epgserver',
    },
    {
        name: 'Core Server',
        path: '/servermanagement/coreserver',
    },
    {
        name: 'Cấu hình Auhen URL',
        path: '/servermanagement/authenurl',
    },
    {
        name: 'Redis Server',
        path: '/servermanagement/redisserver',
    },
    {
        name: 'Quản lý Server group',
        path: '/servermanagement/servergroup',
    },
    {
        name: 'Plugin server type',
        path: '/servermanagement/pluginservertype',
    },
    {
        name: 'Plugin server',
        path: '/servermanagement/pluginserver',
    },
    {
        name: 'Device by pass',
        path: '/servermanagement/devicebypass',
    },
    {
        name: 'Quản lý Services',
        path: '/servermanagement/servicesmanagement',
    },
];

export const moduleUserVNP = [
    {
        name: 'User',
        path: '/uservnpmanagement/user',
    },
    {
        name: 'Nhóm quyền',
        path: '/uservnpmanagement/group',
    },
    {
        name: 'Quản lý menu',
        path: '/uservnpmanagement/menu',
    },
];

export const moduleSourceCode = [
    {
        name: 'Module',
        path: '/sourcecodemanagement/module',
    },
    {
        name: 'File',
        path: '/sourcecodemanagement/file',
    },
    {
        name: 'Controller',
        path: '/sourcecodemanagement/controller',
    },
];

export const userInFo = [
    {
        ID: 1,
        Fullname: 'Nguyen Van A',
        Name: 'NVA',
        Group: 'Admin',
        CreateDate: '18/10/2022',
        Status: 'Hoạt động',
        Operation: '',
    },
    {
        ID: 2,
        Fullname: 'Nguyen Van B',
        Name: 'NVA',
        Group: 'Admin',
        CreateDate: '1/9/2022',
        Status: 'Hoạt động',
        Operation: '',
    },
    {
        ID: 3,
        Fullname: 'Nguyen Van C',
        Name: 'NVA',
        Group: 'Admin',
        CreateDate: '18/10/2022',
        Status: 'Ẩn',
        Operation: '',
    },
    {
        ID: 4,
        Fullname: 'Nguyen Van D',
        Name: 'NVA',
        Group: 'Admin',
        CreateDate: '20/10/2022',
        Status: 'Ẩn',
        Operation: '',
    },
    {
        ID: 5,
        Fullname: 'Nguyen Van E',
        Name: 'NVA',
        Group: 'Admin',
        CreateDate: '18/10/2022',
        Status: 'Hoạt động',
        Operation: '',
    },
];

export const GroupRuleList = [
    {
        ID: 1,
        GroupName: 'administration',
        Operation: '',
    },
    {
        ID: 2,
        GroupName: 'Agency Sales',
        Operation: '',
    },
    {
        ID: 3,
        GroupName: 'Analytics',
        Operation: '',
    },
    {
        ID: 4,
        GroupName: 'Agency_b2c',
        Operation: '',
    },
    {
        ID: 5,
        GroupName: 'Agency_MyTV',
        Operation: '',
    },
    {
        ID: 6,
        GroupName: 'agency_trainning',
        Operation: '',
    },
    {
        ID: 7,
        GroupName: 'Agency_view',
        Operation: '',
    },
    {
        ID: 8,
        GroupName: 'ANTT',
        Operation: '',
    },
    {
        ID: 9,
        GroupName: 'Ban Giám Đốc - MyTV',
        Operation: '',
    },
    {
        ID: 10,
        GroupName: 'Báo Cáo Log View',
        Operation: '',
    },
    {
        ID: 11,
        GroupName: 'BlueSea',
        Operation: '',
    },
    {
        ID: 12,
        GroupName: 'administration1',
        Operation: '',
    },
    {
        ID: 13,
        GroupName: 'administration2',
        Operation: '',
    },
];

export const MenuManagementList = [
    {
        MenuName: 'Quản lý User',
        MenuKey: 'ql-user',
        MenuLink: '/usermanagement/user',
        MenuParent: '5',
        Order: '1',
        Status: 'Hoạt động',
        Operation: '',
    },
    {
        MenuName: 'Quản lý Server',
        MenuKey: 'ql-server',
        MenuLink: '/servermanagement/regionserver',
        MenuParent: '5',
        Order: '2',
        Status: 'Hoạt động',
        Operation: '',
    },
    {
        MenuName: 'Quản lý User VNP',
        MenuKey: 'ql-user-vnp',
        MenuLink: '/uservnpmanagement/user',
        MenuParent: '5',
        Order: '3',
        Status: 'Hoạt động',
        Operation: '',
    },
    {
        MenuName: 'Quản lý source code',
        MenuKey: 'ql-source-code',
        MenuLink: '/sourcecodemanagement/module',
        MenuParent: '5',
        Order: '4',
        Status: 'Hoạt động',
        Operation: '',
    },
];

export const GroupRulecolumnDefs = [
    {
        field: 'ID',
        headerClass: cx('table__header'),
        cellClassRules: { table__body: 'value !== undefined' },
        rowDrag: true,
    },
    {
        field: 'GroupName',
        headerClass: cx('table__header'),
        cellClassRules: { table__body: 'value !== undefined' },
        rowDrag: true,
    },
    {
        field: 'Operation',
        headerClass: cx('table__header'),
        cellClassRules: { table__body: 'value !== undefined' },
        cellRenderer: SelectAction,
        rowDrag: true,
    },
];

export const UserInfocolumnDefs = [
    {
        field: 'ID',
        headerClass: cx('table__header'),
        cellClassRules: { table__body: 'value !== undefined' },
        rowDrag: true,
    },
    {
        field: 'Fullname',
        headerClass: cx('table__header'),
        cellClassRules: { table__body: 'value !== undefined' },
        rowDrag: true,
    },
    {
        field: 'Name',
        headerClass: cx('table__header'),
        cellClassRules: { table__body: 'value !== undefined' },
        rowDrag: true,
    },
    {
        field: 'Group',
        headerClass: cx('table__header'),
        cellClassRules: { table__body: 'value !== undefined' },
        rowDrag: true,
    },
    {
        field: 'CreateDate',
        headerClass: cx('table__header'),
        cellClassRules: { table__body: 'value !== undefined' },
        rowDrag: true,
    },
    {
        field: 'Status',
        headerClass: cx('table__header'),
        cellClassRules: { table__body: 'value !== undefined' },
        rowDrag: true,
    },
    {
        field: 'Operation',
        headerClass: cx('table__header'),
        cellClassRules: { table__body: 'value !== undefined' },
        cellRenderer: SelectAction,
        rowDrag: true,
    },
];

export const MenuManagementInfocolumnDefs = [
    {
        field: 'MenuName',
        headerClass: cx('table__header'),
        cellClassRules: { table__body: 'value !== undefined' },
        rowDrag: true,
    },
    {
        field: 'MenuKey',
        headerClass: cx('table__header'),
        cellClassRules: { table__body: 'value !== undefined' },
        rowDrag: true,
    },
    {
        field: 'MenuLink',
        headerClass: cx('table__header'),
        cellClassRules: { table__body: 'value !== undefined' },
        rowDrag: true,
    },
    {
        field: 'MenuParent',
        headerClass: cx('table__header'),
        cellClassRules: { table__body: 'value !== undefined' },
        rowDrag: true,
    },
    {
        field: 'Order',
        headerClass: cx('table__header'),
        cellClassRules: { table__body: 'value !== undefined' },
        rowDrag: true,
    },
    {
        field: 'Status',
        headerClass: cx('table__header'),
        cellClassRules: { table__body: 'value !== undefined' },
        rowDrag: true,
    },
    {
        field: 'Operation',
        headerClass: cx('table__header'),
        cellClassRules: { table__body: 'value !== undefined' },
        cellRenderer: SelectAction,
        rowDrag: true,
    },
];

export const treeData = [
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
        key: '0-1',
        children: [
            {
                title: 'Region Server',
                key: '0-1-0',
            },
            {
                title: 'EPG Server',
                key: '0-1-1',
            },
            {
                title: 'Core Server',
                key: '0-1-2',
            },
            {
                title: 'Cấu hình Auhen URL',
                key: '0-1-3',
            },
            {
                title: 'Redis Server',
                key: '0-1-4',
            },
            {
                title: 'Quản lý Server group',
                key: '0-1-5',
            },
            {
                title: 'Plugin server type',
                key: '0-1-6',
            },
            {
                title: 'Plugin server',
                key: '0-1-7',
            },
            {
                title: 'Device by passr',
                key: '0-1-8',
            },
            {
                title: 'Quản lý Services',
                key: '0-1-9',
            },
        ],
    },
    {
        title: 'Quản lý User VNP',
        key: '0-2',
        children: [
            {
                title: 'User',
                key: '0-2-0',
            },
            {
                title: 'Nhóm quyền',
                key: '0-2-1',
            },
            {
                title: 'Quản lý menu',
                key: '0-2-2',
            },
        ],
    },
    {
        title: 'Quản lý source code',
        key: '0-3',
        children: [
            {
                title: 'Module',
                key: '0-3-0',
            },
            {
                title: 'File',
                key: '0-3-1',
            },
            {
                title: 'Controller',
                key: '0-3-2',
            },
        ],
    },
];
