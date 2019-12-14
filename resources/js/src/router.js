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
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue'),
          },
          {
            path: '/devices',
            name: 'devices',
            component: () => import('./views/devices/devices-list.vue'),
          },
          {
            path: '/devices/add',
            name: 'add_device',
            component: () => import('./views/devices/add-device.vue'),
          },
          {
            path: '/devices/edit',
            name: 'edit_device',
            component: () => import('./views/devices/edit-device.vue'),
          },
          {
            path: '/devices_groups',
            name: 'devices_groups',
            component: () => import('./views/devices-groups/devices-groups-list.vue'),
          },
          {
            path: '/devices_groups/add',
            name: 'add_devices_group',
            component: () => import('./views/devices-groups/add-devices-group.vue'),
          },
          {
            path: '/devices_groups/edit',
            name: 'edit_devices_group',
            component: () => import('./views/devices-groups/edit-devices-group.vue'),
          },
        ],
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
    if(localStorage.user){
        let user = JSON.parse(localStorage.user)
        loggedIn = user.api_token
    }
  if(loggedIn || to.path === '/login'){
    next()
  }
  else{
    next('/login')
  }
})

export default router
