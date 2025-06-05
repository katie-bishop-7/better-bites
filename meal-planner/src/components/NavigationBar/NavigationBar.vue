<script setup>
import NavigationButton from './NavigationButton.vue';
import SearchBar from './SearchBar.vue';

defineProps(['name'])
</script>

<template>
    <div id="navigation-container">
        <div id="app-bar">
            <h1>Better Bites</h1>
            <SearchBar />
        </div>
        <div id="navigation-buttons">
            <NavigationButton name="Home" href=""/>
            <NavigationButton name="Meal Planner" href="meal-planner"/>
            <NavigationButton name="Shopping List" href="shopping-list"/>
            <NavigationButton name="Saved Recipes" href="saved-recipes"/>
        </div>
    </div>
</template>

<style scoped>

#navigation-container {
    display: flex;
    flex-direction: column;
    background-color: white;

    /* Stick to the top */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
}

#navigation-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;
    height: fit-content;
    border-bottom: 1px solid black;
}

#app-bar {
    width: 100%;
    min-height: 88px;
    padding: 24px;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid black;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 8%;
    padding-right: 8%;
}
</style>