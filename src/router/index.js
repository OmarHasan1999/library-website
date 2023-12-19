import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/quotesPage',
      name: 'quotesPage',
      component: () => import('../views/quotesView.vue')
    },
    
    {
      path: "/reviewsPage",
      name: "reviewsPage",
      component: () =>
        import("../views/reviewsView.vue"),
    },
    // {
      
    //     path: "/contact",
    //     name: "Contact",
    //     component: () =>
    //       import("../views/ContactView.vue"),
      
    // }
  ]
});

//  router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
  
//   document.title = `${to.name}-MARK`;

//   next()
// })

export default router
