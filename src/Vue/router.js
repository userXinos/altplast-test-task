import {createWebHistory, createRouter} from 'vue-router';

const routes = [
    {name: 'posts', path: '/', component: () => import('../pages/Posts.vue')},
    {name: 'comments', path: '/comments/:postId', component: () => import('../pages/Comments.vue')},
    {name: 'user', path: '/user/:id', component: () => import('../pages/User.vue')},
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
