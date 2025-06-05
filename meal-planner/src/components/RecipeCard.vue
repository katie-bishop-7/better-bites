<template>
    <div class="card">
        <div class="image-placeholder"></div>
        <h2>Recipe name</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda sapiente hic quo, temporibus,
            inventore ipsam beatae itaque labore, aliquam culpa ab est consequuntur mollitia facilis ratione architecto
            soluta dolore.</h3>
    </div>
</template>

<style scoped>
.card {
    width: 272px;
    height: 368px;
    padding: 16px;

    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 3px;
}

h3 {
    overflow: hidden;
}

.image-placeholder {
    min-width: 240px;
    min-height: 240px;
    background-color: gray;
}
</style>