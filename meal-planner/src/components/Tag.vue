<script setup>
const props = defineProps({
    name : String,
    color : String,
    active: Boolean,
    small: Boolean
})

</script>

<template>
    <button 
        @click="$emit(active ? 'removeTag' : 'addTag', name)"
        :style="{ backgroundColor : color,
            transform : small ? 'scale(0.75)' : ''
        }">{{ name }}</button>
</template>

<style scoped>

button {
    border: none;
    background-color: lightgrey;
    border-radius: 12px;
    padding: 8px 12px;
}

button:hover {
    transform: scale(1.08);
    cursor: pointer;
}


</style>