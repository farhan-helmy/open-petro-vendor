import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Transaction from '@/views/Transaction'
import Fuelstock from '@/views/Fuelstock'
import Profile from '@/views/Profile'
import Users from '@/views/Users'
import Graph from '@/views/Graph'
import Feedback from '@/views/Feedback'
import Covid19 from '@/views/Covid19'

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
        path: '/userlists',
        name: 'userlists',
        component: Users
    },
    {
        path: '/graph',
        name: 'graph',
        component: Graph
    },
    {
        path: '/feedback',
        name: 'feedback',
        component: Feedback
    },
    {
        path: '/covid19',
        name: 'covid19',
        component: Covid19
    }
]
})

export default router;