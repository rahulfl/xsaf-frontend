import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/Login.vue'
import register from '../views/Register.vue'
import main from '../views/master/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        name: 'main',
        path: '/main',
        component: main,
        children: [
            {
                name: 'Transactions',
                path: '/transactions',
                component: () => import("../views/TransactionsView.vue"),
            },
            {
                name: 'Add Transactions',
                path: '/add-transactions',
                component: () => import("../views/AddTransactionsView.vue"),
            }
        ]
    },
    {
        name: 'Login',
        path: '/',
        component: login,
    },
    {
        name: 'Register',
        path: '/register',
        component: register,
    },
],
});

export default router;
