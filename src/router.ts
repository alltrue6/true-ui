import { createRouter, createWebHashHistory } from 'vue-router';
const router=createRouter({
    history:createWebHashHistory(),
    routes:[{
        name:'home',
        path:'/home',
        component:()=>{return import('./views/home.vue') }
    }]
})
export default router;