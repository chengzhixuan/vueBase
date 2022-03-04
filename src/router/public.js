const routers = [{
    path: '/',
    name: 'Home',
    component: () =>
        import ( /* webpackChunkName: 'Home' */ '../views/public/Home.vue'),
}, {
    path: '/setting',
    name: 'setting',
    component: () =>
        import ( /* webpackChunkName: 'setting' */ '../views/public/setting.vue'),
}, {
    path: '/login',
    name: 'login',
    component: () =>
        import ( /* webpackChunkName: 'login' */ '../views/public/login.vue'),
}, ];
export default routers;