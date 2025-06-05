import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MealPlanner from '../views/MealPlanner.vue'
import ShoppingList from '../views/ShoppingList.vue'
import SavedRecipes from '../views/SavedRecipes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    // {
    //   path: '/about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    {
      path: '/meal-planner',
      component: MealPlanner,
    },
    {
      path: '/shopping-list',
      component: ShoppingList
    },
    {
      path: '/saved-recipes',
      component: SavedRecipes
    }
  ],
})

export default router
