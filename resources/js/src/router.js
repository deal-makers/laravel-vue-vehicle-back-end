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
            path: '/narudzbe/nova',
            name: 'nova-narudzba',
            component: () => import('./views/order/new-order.vue'),
          },
          {
            path: '/narudzbe/kalendar',
            name: 'kalendar',
            component: () => import('./views/order/calendar.vue'),
          },
          {
            path: '/narudzbe/pretraga',
            name: 'pretraga narudzbi',
            component: () => import('./views/order/order-search.vue'),
          },
          {
            path: '/narudzbe/reklamacije',
            name: 'pregled reklamacija',
            component: () => import('./views/order/reclamation-view.vue'),
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
