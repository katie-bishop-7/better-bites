<script setup>
import RecipeCard from './RecipeCard.vue';

import { ref } from 'vue';

const id_array = Array(50).fill().map((_, i) => i);
const recipe_id_list = ref(id_array)

defineProps(['id_number']);

</script>

<template>
    <div id="recipe-container">
        <RecipeCard v-for="id of recipe_id_list" 
        :key="id" 
        :id_number="id"/>
    </div>
</template>

<style scoped>

#recipe-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;

    row-gap: 50px;
}

</style>