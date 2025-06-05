<script setup>
const props = defineProps({
    name : String
})

const addTag = () => {
    console.log("tag added")
}
</script>

<template>
    <button @click="addTag">{{ name }}</button>
</template>

<style scoped>

button {
    background-color: lightgray;
    border: 3px solid gray;
    border-radius: 12px;
    padding: 8px 12px;
}
</style>