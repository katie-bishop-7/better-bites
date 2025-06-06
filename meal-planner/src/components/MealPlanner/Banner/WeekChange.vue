<script setup>

const props = defineProps({
    day : String,
})
console.log(props.day)
</script>

<template>
    <div class="container">
            <span class="material-symbols-outlined">
                arrow_circle_left
            </span>
            <h3>Week of {{ props.day }}</h3>
            <span class="material-symbols-outlined">
                arrow_circle_right
            </span>
        </div>
</template>