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

                // SANITATION SECTION
                {
                    path: 'vehicle_groups',
                    name: 'vehicle_groups',
                    component: () => import('./views/sanitation/vehicle-groups/vehicle-groups-list.vue'),
                },
                {
                    path: 'vehicle_groups/add',
                    name: 'add_vehicle_group',
                    component: () => import('./views/sanitation/vehicle-groups/add-vehicle-group.vue'),
                },
                {
                    path: 'vehicle_groups/edit/:id',
                    name: 'edit_vehicle_group',
                    component: () => import('./views/sanitation/vehicle-groups/edit-vehicle-group.vue'),
                },
                {
                    path: 'vehicles',
                    name: 'vehicles',
                    component: () => import('./views/sanitation/vehicles/vehicle-list.vue'),
                },
                {
                    path: 'vehicles/add',
                    name: 'add_vehicle',
                    component: () => import('./views/sanitation/vehicles/add-vehicle.vue'),
                },
                {
                    path: 'vehicles/edit/:id',
                    name: 'edit_vehicle',
                    component: () => import('./views/sanitation/vehicles/edit-vehicle.vue'),
                },
                {
                    path: 'compute-modules',
                    name: 'compute-modules',
                    component: () => import('./views/sanitation/compute-modules/compute-list.vue'),
                },
                {
                    path: 'compute-modules/add',
                    name: 'add_compute',
                    component: () => import('./views/sanitation/compute-modules/add-compute.vue'),
                },
                {
                    path: 'compute-modules/edit/:id',
                    name: 'edit_compute',
                    component: () => import('./views/sanitation/compute-modules/edit-compute.vue'),
                },

                // GLOBAL ADMIN SECION

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
                    component: () => import('./views/remote-devices/save-device.vue'),
                },
                {
                    path: 'remote_devices/edit/:id',
                    name: 'edit_remote_device',
                    component: () => import('./views/remote-devices/save-device.vue'),
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
