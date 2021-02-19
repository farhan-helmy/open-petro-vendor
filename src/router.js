import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Transaction from '@/views/Transaction'
import Fuelstock from '@/views/Fuelstock'
import Profile from '@/views/Profile'
import Pumptransaction from '@/views/Pump'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/transaction-log',
        name: 'transaction-log',
        component: Transaction
    },
    {
        path: '/fuelstock',
        name: 'fuelstock',
        component: Fuelstock
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/pumptransaction',
        name: 'pumptransaction',
        component: Pumptransaction
    }
]
})

export default router;