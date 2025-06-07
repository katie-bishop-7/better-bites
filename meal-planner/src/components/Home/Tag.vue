<script setup>
const props = defineProps({
    name : String,
    color : String,
    active: Boolean,
})

</script>

<template>
    <button 
        @click="$emit(active ? 'removeTag' : 'addTag', name)"
        :style="{ backgroundColor : color}">{{ name }}</button>
</template>

<style scoped>

button {
    font-size: 10.5px;
    border: none;
    background-color: lightgrey;
    border-radius: 12px;
    padding: 7px 10px;
    box-sizing: content-box;
    margin: 0px;
}

</style>