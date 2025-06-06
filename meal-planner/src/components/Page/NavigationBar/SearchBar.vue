<script setup>

</script>

<template>
    <div id="searchbar-wrap">
        Search for recipes
        <form @click="searchForRecipe">
            <input type="text" id="searchbar">
            </input>
        </form>
        <a href="/">
            <span class="material-symbols-outlined">
                search
            </span>
        </a>
    </div>
</template>

<style scoped>
#searchbar {
    min-width: 100px;
    width: 510px;
    height: 32px;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 6px;
}

#searchbar-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
}

input {
    border: none;
}
</style>