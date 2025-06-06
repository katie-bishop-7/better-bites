<script setup>
import recipes from '../../../public/recipes.json'
import Tag from './Tag.vue';
const props = defineProps({
    id_number : Number
})

const recipe = recipes[props.id_number]

const name = recipe.name;
const description = recipe.description;
const ingredients = recipe.ingredients;
const instructions = recipe.instructions;
const tags = recipe.tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1));
const image_url = recipe.image_url;

</script>




<template>
    <div class="card">

        <img :src="image_url" :alt="`Photo of ${name}`" loading="lazy"/>
        <h2>{{ name }}</h2>
        <div>
            <Tag v-for="tag in tags"
            :key="tag"
            :name="tag"
            :small="true"
            color="#5DEABB"
            />

        </div>
        <h3>{{ description }}</h3>
    </div>
</template>

<style scoped>
.card {
    width: 272px;
    height: 446px;
    padding: 16px;

    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 3px;
}

h2,
h3 {
    padding: 8px 0;
    min-height: fit-content;
    max-height: 20px;
    text-overflow: ellipsis;
    overflow:hidden;
}

div {
    height: fit-content;
}

img {
    max-width: 240px;
    max-height: 240px;
    min-width: 240px;
    min-height: 240px;

    object-fit: cover; /* Ensure image does not get distorted */

}
</style>