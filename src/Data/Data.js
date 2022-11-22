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
