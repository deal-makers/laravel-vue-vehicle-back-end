import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/app',
    routes: [
        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '/',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '',
                    name: 'home',
                    component: () => import('./views/Home.vue'),
                },
                {
                    path: 'devices',
                    name: 'devices',
                    component: () => import('./views/devices/device-list.vue'),
                },
                {
                    path: 'devices/add',
                    name: 'add_device',
                    component: () => import('./views/devices/add-device.vue'),
                },
                {
                    path: 'devices/edit/:id',
                    name: 'edit_device',
                    component: () => import('./views/devices/edit-device.vue'),
                },
                {
                    path: 'device_groups',
                    name: 'device_groups',
                    component: () => import('./views/device-groups/device-groups-list.vue'),
                },
                {
                    path: 'device_groups/add',
                    name: 'add_device_group',
                    component: () => import('./views/device-groups/add-device-group.vue'),
                },
                {
                    path: 'device_groups/edit/:id',
                    name: 'edit_device_group',
                    component: () => import('./views/device-groups/edit-device-group.vue'),
                },
                {
                    path: 'logs',
                    name: 'logs',
                    component: () => import('./views/logs/logs-list'),
                },
                {
                    path: 'remote_devices',
                    name: 'remote_devices',
                    component: () => import('./views/remote-devices/device-list.vue'),
                },
                {
                    path: 'remote_devices/add',
                    name: 'add_remote_device',
                    component: () => import('./views/remote-devices/add-device.vue'),
                },
                {
                    path: 'remote_devices/edit/:id',
                    name: 'edit_remote_device',
                    component: () => import('./views/remote-devices/edit-device.vue'),
                },
            ]
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/login',
                    name: 'pageLogin',
                    component: () => import('@/views/pages/Login.vue')
                },
                {
                    path: '/pages/error-404',
                    name: 'pageError404',
                    component: () => import('@/views/pages/Error404.vue')
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.beforeEach((to, from, next) => {
    let loggedIn
    if (localStorage.user) {
        let user = JSON.parse(localStorage.user)
        loggedIn = user.api_token
    }
    if (loggedIn || to.path === '/login') {
        next()
    } else {
        next('/login')
    }
})

export default router
