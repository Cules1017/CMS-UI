import Home from '~/pages/Home/Home';
import GroupRule from '~/pages/GroupRule/GroupRule';
import ServerManagement from '~/pages/ServerManagement/ServerManagement';
import SourceCodeManagement from '~/pages/SourceCodeManagement/SourceCodeManagement';
import UserVNPManagement from '~/pages/UserVNPManagement/UserVNPManagement';
import MenuManagement from '~/pages/MenuManagement/MenuManagement';
import HomeAdd from '~/pages/Home/HomeAdd';
import HomeEdit from '~/pages/Home/HomeEdit';

const publicRoutes = [
    { path: '/usermanagement/user', component: Home },
    { path: '/usermanagement/user/add', component: HomeAdd },
    { path: '/usermanagement/user/edit', component: HomeEdit },

    { path: '/usermanagement/group', component: GroupRule },

    { path: '/usermanagement/menu', component: MenuManagement },

    { path: '/servermanagement/regionserver', component: ServerManagement },

    { path: '/uservnpmanagement/user', component: UserVNPManagement },

    { path: '/sourcecodemanagement/module', component: SourceCodeManagement },
];

export { publicRoutes };
