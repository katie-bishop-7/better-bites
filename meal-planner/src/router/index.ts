import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Recipe from '../views/Recipe.vue'
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
    { 
      path: '/home',
      redirect: '/' 
    },
    { path: '/recipes',
      redirect: '/'
    },
    {
      path: '/recipes/:id',
      component: Recipe,
    },
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
