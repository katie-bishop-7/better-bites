<script setup>
import Title from './Title.vue';
</script>

<template>
    <div class="container">
        <div class="title">
            <Title/>
        </div>
    </div>
</template>

<style scoped>
.container {
    /* Space from the rest of content */
    margin-top: 140px; 

    /* Stick to the bottom of page */
    flex: 0 0 200px;

    background-color: lightgray;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
    padding-left: 140px;
}

.title {
    transform: scale(.70)
}
</style>
