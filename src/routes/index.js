import Home from '~/pages/Home/Home';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/usermanagement', component: Home },
    { path: '/servermanagement', component: Home },
    { path: '/vnpusermanagement', component: Home },
    { path: '/sourcecodemanagement', component: Home },
];

// const privateRoutes = [];

// export { publicRoutes, privateRoutes };
export { publicRoutes };
