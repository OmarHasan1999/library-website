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
    {
      
        // path: "/detailPage/:title/:img/:pageNum/:year/:size/:cat/:file/:overView/",
        path: "/detailPage",
        name: "detailPage",
        component: () =>
          import("../views/detailView.vue"),
        beforeEnter: (to, from, next) => {
          const detail = store.getDetail()
          if(detail){
            to.params = detail
            store.setDetail(null)
          }
        next()
        },
        props:true,
      
    }
    
  ]
});
import store from "../js/store"




 router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  
  document.title = `${to.name}`;

  next()
})

export default router
