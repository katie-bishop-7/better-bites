<script setup>
import recipes from '../../../../../public/recipes.json'
const props = defineProps({
    meal_title: String,
})

const id = Math.floor(Math.random() * 100)
const image_url = recipes[id].image_url
const name = recipes[id].name
const description = recipes[id].description

</script>


<template>
    <h3>{{ props.meal_title }}</h3>
    <img :src="image_url" loading="lazy"></img>
    <h3 id="name">{{ name }}</h3>
    <h4 id="description">{{ description }}</h4>
</template>

<style scoped>
img {
    width: 155px;
    height: 155px;

    object-fit: cover;
    /* Ensure image does not get distorted */
}

#description {
    height: 70px;
}

#name {
    height:30px;
}

#description, #name {
    text-overflow: ellipsis;
    white-space: wrap;
    overflow: hidden;

}
</style>