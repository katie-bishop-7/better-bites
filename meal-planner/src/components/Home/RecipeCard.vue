<script setup>
import recipes from '../../../public/recipes.json'
import Tag from './Tag.vue';
const props = defineProps({
    id_number: Number
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

        <img :src="image_url" :alt="`Photo of ${name}`" loading="lazy" />
        <h3>
            <router-link :to="`/recipes/${props.id_number}`">
                {{ name }}
            </router-link>
        </h3>
        <div id="tags">
            <Tag v-for="tag in tags" :key="tag" :name="tag" color="#5DEABB" class="tag"/>

        </div>
        <h4>{{ description }}</h4>
    </div>
</template>

<style scoped>
.card {
    width: 15em;
    min-height: max-content;
    aspect-ratio: 2 / 3.6;
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
    overflow: hidden;
}

div {
    height: fit-content;
}

#tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
}

img {
    min-width: 100%;
    aspect-ratio: 1;
    max-width: 100%;

    object-fit: cover;
    /* Ensure image does not get distorted */
}

/* :deep so that child Tag is affected */
:deep(.tag) {
    font-size: 8px;
    padding: 4px 8px;
}
</style>