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
            },
            {
                name: 'Edit Transactions',
                path: '/edit-transactions',
                component: () => import("../views/EditTransactionsView.vue"),
            },
            {
                name: 'Dashboard',
                path: '/dashboard',
                component: () => import("../views/DashboardView.vue"),
            },
            {
                name: 'Customers',
                path: '/customers',
                component: () => import("../views/CustomersView.vue"),
            },
            {
                name: 'Traders',
                path: '/traders',
                component: () => import("../views/TradersView.vue"),
            },
            {
                name: 'Suppliers',
                path: '/suppliers',
                component: () => import("../views/SuppliersView.vue"),
            },
            {
                name: 'Xsaf Protocol',
                path: '/xsaf-protocol',
                component: () => import("../views/XsafProtocolView.vue"),
            },
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
