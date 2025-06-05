<script setup>
    import Tag from './Tag.vue';

    defineProps(["name"])
    const active_tags = ["Breakfast", "Lunch", "Dinner"];
</script>

<template>
    <div id="tag-container">
        Tags:
        <Tag v-for="tag in active_tags" :key="tag" :name="tag" />
        <Tag name="+" />
    </div>
</template>

<style scoped>
#tag-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 1176px;
    gap: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>