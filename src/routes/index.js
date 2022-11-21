import Home from '~/pages/Home/Home';
import GroupRule from '~/pages/GroupRule/GroupRule';
import ServerManagement from '~/pages/ServerManagement/ServerManagement';
import SourceCodeManagement from '~/pages/SourceCodeManagement/SourceCodeManagement';
import UserVNPManagement from '~/pages/UserVNPManagement/UserVNPManagement';
import MenuManagement from '~/pages/MenuManagement/MenuManagement';
import HomeAdd from '~/pages/Home/HomeAdd';

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

export const moduleSourceCode = [
    {
        name: 'Module',
        path: 'sourcecodemanagement/module',
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

export const moduleUserVNP = [
    {
        name: 'User',
        path: 'uservnpmanagement/user',
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

export const userInFo = [
    {
        id: 1,
        fullname: 'Nguyen Van A',
        name: 'NVA',
        group: 'Admin',
        createDate: '18/10/2022',
        status: 'Hoạt động',
    },
    {
        id: 2,
        fullname: 'Nguyen Van B',
        name: 'NVA',
        group: 'Admin',
        createDate: '1/9/2022',
        status: 'Hoạt động',
    },
    {
        id: 3,
        fullname: 'Nguyen Van C',
        name: 'NVA',
        group: 'Admin',
        createDate: '18/10/2022',
        status: 'Ẩn',
    },
    {
        id: 4,
        fullname: 'Nguyen Van D',
        name: 'NVA',
        group: 'Admin',
        createDate: '20/10/2022',
        status: 'Ẩn',
    },
    {
        id: 5,
        fullname: 'Nguyen Van E',
        name: 'NVA',
        group: 'Admin',
        createDate: '18/10/2022',
        status: 'Hoạt động',
    },
];

export { publicRoutes };
