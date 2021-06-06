import Vue from 'vue'
import Router from 'vue-router'

import PageDashboard from "../components/page/PageDashboard";
import PageAbout from "../components/page/PageAbout";
import Page404 from "../components/page/Page404";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/dashboard/:page',
            name: 'dashboard',
            component: PageDashboard
        },
        {
            path: '/about*',
            name: 'about',
            component: PageAbout
        },
        {
            path: '/unknown',
            name: '404',
            component: Page404
        },
        {
            path: '/add/payment/:category',
            name: 'addPaymentDefault',
            component: PageDashboard
        },
        {
            path: '/add/payment',
            name: 'addPaymentWihtoutCategory',
            component: PageDashboard
        },
        {
            path: '*',
            redirect: {name: '404'},
        }
    ]
})
