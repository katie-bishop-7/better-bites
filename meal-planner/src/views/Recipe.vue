<script setup>
import recipes from '../../public/recipes.json'
import { useRoute } from 'vue-router'

const route = useRoute();

const recipe = recipes[route.params.id]
const name = recipe.name;
const description = recipe.description;
const ingredients = recipe.ingredients;
const instructions = recipe.instructions;
const tags = recipe.tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1));
const image_url = recipe.image_url;
const prep_time_minutes = recipe.prep_time_minutes;
const cook_time_minutes = recipe.cook_time_minutes;
const total_time_minutes = prep_time_minutes + cook_time_minutes;
const servings = recipe.servings;
const difficulty = recipe.difficulty;


</script>

<template>
    <div class="back">
        <router-link to="/recipes" class="back-button gap-4">
            <span class="material-symbols-outlined">arrow_back</span>
            Back to Recipes
        </router-link>
    </div>
    <div id="recipe">
        <h1>{{ name }}</h1>
        <div class="image-padding border-top border-bottom">
            <img :src="image_url" :alt="`Photo of ${name}`" loading="lazy" />
        </div>
        <h3>{{ description }}</h3>
        <div class="border-bottom nutrition-info">
            <span class="gap-4">
                <span class="material-symbols-outlined">schedule</span>
                <span>{{ prep_time_minutes }} min prep</span>
            </span>
            <span class="gap-4">
                <span class="material-symbols-outlined">timer</span>
                <span>{{ cook_time_minutes }} min cook</span>
            </span>
            <span class="gap-4">
                <span class="material-symbols-outlined">access_time</span>
                <span>{{ total_time_minutes }} min total</span>
            </span>
            <span class="gap-4">
                <span class="material-symbols-outlined">people</span>
                <span>{{ servings }} servings</span>
            </span>
            <span class="gap-4">
                <span class="material-symbols-outlined">skillet</span>
                <span>{{ difficulty }}</span>
            </span>
        </div>
        <h4>Ingredients:</h4>
        <ul>
            <li v-for="ingredient in ingredients" :key="ingredient">{{ ingredient }}</li>
        </ul>
        <h4>Instructions:</h4>
        <p v-for="instruction in instructions" :key="instruction">{{ instruction }}</p>

        <!-- <h4>Nutritional Information:</h4> -->
    </div>
</template>

<style scoped>
#recipe {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto 1fr;
    gap: 16px;
    padding: 16px;
    max-width: 80em;
    margin: auto;
}

.back {
    width: fit-content;
}

h1 {
    justify-self: center;
}

h4 {
    font-weight: bold;
}

img {
    aspect-ratio: 4 / 3;
    max-width: 20em;
    object-fit: cover;
}

.image-padding {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 16px 0;
}

.border-bottom {
    border-bottom: 1px solid black;
    padding-bottom: 16px;
}

.border-top {
    border-top: 1px solid black;
}

.nutrition-info {
    font-size: 0.9em;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    justify-content: center;
}

.gap-4 {
    display: flex;
    gap: 4px;
    align-items: center;
}
</style>