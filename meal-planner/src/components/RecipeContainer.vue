<script setup>
import RecipeCard from './RecipeCard.vue';

import { ref } from 'vue';

const id_array = Array(10).fill().map((_, i) => i);
const recipe_id_list = ref(id_array)

</script>

<template>
    <div id="recipe-container">
        <RecipeCard v-for="id in recipe_id_list" :key="id"/>
    </div>
</template>

<style scoped>

#recipe-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    row-gap: 50px;
}

</style>