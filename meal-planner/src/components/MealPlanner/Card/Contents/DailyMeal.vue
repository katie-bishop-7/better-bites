<script setup>
import recipes from '../../../../../public/recipes.json'
const props = defineProps({
    meal_title: String,
})

let icon;
if (props.meal_title === "Breakfast") {
    icon = "breakfast_dining"
} else if (props.meal_title === "Lunch") {
    icon = "lunch_dining"
} else if (props.meal_title === "Dinner") {
    icon = "restaurant"
} else {
    icon = "restaurant"
}
const id = Math.floor(Math.random() * 100)
const image_url = recipes[id].image_url
const name = recipes[id].name
const description = recipes[id].description

</script>


<template>
    <div class="meal-container">
        <h3 class="container">
            <span class="material-symbols-outlined">
                {{ icon }}
            </span>
            {{ props.meal_title }}
        </h3>
        <img :src="image_url" loading="lazy"></img>
        <h3 id="name">{{ name }}</h3>
        <!-- <h4 id="description">{{ description }}</h4> -->
    </div>
</template>

<style scoped>

.meal-container {
    height: 17em;
}
.container {
    display: flex;
    align-items: center;
    gap: 8px;
}

img {
    /* Set max width to be 100% to let image take up full width possible. Parent set box-sizing to border-box */
    max-width: 100%;
    /* Square image! */
    aspect-ratio: 1 / 1;
    object-fit: cover;
    /* Ensure image does not get distorted */
}

#description {
    height: 70px;
}

#description,
#name {
    /* text-overflow: ellipsis; */
    white-space: wrap;
    /* overflow: hidden; */

}
</style>