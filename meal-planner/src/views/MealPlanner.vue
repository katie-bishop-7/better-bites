<script setup>
import { computed } from 'vue'

const today = new Date() // automatically initializes to today's date
const first_day_of_week = today.getDate() - today.getDay()
const first_date_of_week = new Date(today.getFullYear(), today.getMonth(), first_day_of_week)
const formattedFirstDay = first_date_of_week.toLocaleString('en-US',{
    month: 'long',
    day: 'numeric',
})
</script>

<template>
    <div class="container">
        <span class="material-symbols-outlined">
            arrow_circle_left
        </span>
        <span>Week of {{ formattedFirstDay }}</span>
        <span class="material-symbols-outlined">
            arrow_circle_right
        </span>
    </div>
</template>

<style scoped>
.material-symbols-outlined {
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 36;
}

span {
    font-size: 36px;
}

.container {
    display: flex;
    flex-direction: row;
    justify-self: center;
    align-items: center;
    gap: 16px;
}
</style>