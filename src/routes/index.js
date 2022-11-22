import Home from '~/pages/Home/Home';
import GroupRule from '~/pages/GroupRule/GroupRule';
import ServerManagement from '~/pages/ServerManagement/ServerManagement';
import SourceCodeManagement from '~/pages/SourceCodeManagement/SourceCodeManagement';
import UserVNPManagement from '~/pages/UserVNPManagement/UserVNPManagement';
import MenuManagement from '~/pages/MenuManagement/MenuManagement';
import HomeAdd from '~/pages/Home/HomeAdd';
import SelectAction from '~/component/SelectAction/SelectAction';

const publicRoutes = [
    { path: '/usermanagement/user', component: Home },
    { path: '/usermanagement/user/add', component: HomeAdd },
    { path: '/usermanagement/group', component: GroupRule },
    { path: '/usermanagement/menu', component: MenuManagement },

    { path: '/servermanagement/regionserver', component: ServerManagement },

    { path: '/uservnpmanagement/user', component: UserVNPManagement },

    { path: '/sourcecodemanagement/module', component: SourceCodeManagement },
];

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

export { publicRoutes };
