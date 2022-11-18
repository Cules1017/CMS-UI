import GroupRule from '~/pages/GroupRule/GroupRule';
import Home from '~/pages/Home/Home';
import ServerManagement from '~/pages/ServerManagement/ServerManagement';

const publicRoutes = [
    { path: '/', component: Home },
    // { path: '/usermanagement', component: ServerManagement },
    { path: '/usermanagement', component: Home },
    { path: '/servermanagement', component: ServerManagement },
    { path: '/vnpusermanagement', component: Home },
    { path: '/sourcecodemanagement', component: Home },
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

// const privateRoutes = [];

// export { publicRoutes, privateRoutes };
export { publicRoutes };
