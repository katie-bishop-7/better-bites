<script setup>
const props = defineProps({
  name: String
})

</script>

<template>
    <button>
        <a href="/">{{ name }}</a>
    </button>
</template>

<style scoped>

button {
    min-width: fit-content;
    padding: 12px;
    background-color: white;
    border: none;
}

a {
    font-size: 24px;
}

</style>