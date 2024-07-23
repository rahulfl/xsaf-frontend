import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/Login.vue'
import dashboard from '../views/master/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        name: 'Dashboard',
        path: '/',
        component: dashboard,
        children: [
            {
                name: 'Transactions',
                path: '/transactions',
                component: () => import("../views/TransactionsView.vue"),
            },
            {
                name: 'Add Transactions',
                path: '/addtransactions',
                component: () => import("../views/AddTransactionsView.vue"),
            }
        ]
    },
],
});

export default router;
