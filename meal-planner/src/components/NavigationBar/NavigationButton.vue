<script setup>
const props = defineProps({
  name: String,
  href: String
})

</script>

<template>
    <button>
        <router-link :to="`/${href}`">{{ name }}</router-link>
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