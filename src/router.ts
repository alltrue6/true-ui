import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            name: 'home',
            path: '/home',
            component: () => import('./views/home.vue')
        },
        {
            name: 'trueButton',
            path: '/button',
            component: () => import('./components/trueButton.vue')
        },
        {
            name: 'trueBorder',
            path: '/border',
            component: () => import('./components/trueBorder.vue')
        }
    ]
})
export default router;