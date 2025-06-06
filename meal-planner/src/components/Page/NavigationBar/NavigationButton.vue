<script setup>
const props = defineProps({
  name: String,
  href: String,
  icon: String,
})

</script>

<template>
    <button>
        <router-link :to="`/${href}`">
            <span class="material-symbols-outlined">{{ icon }}</span>
            {{ name }}</router-link>
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
    display:flex;
    gap: 10px;
    font-size: 24px;
    align-items: center;
}

</style>