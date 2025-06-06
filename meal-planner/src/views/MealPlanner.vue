<script setup>
import { computed } from 'vue'
import WeekViewDay from '@/components/MealPlanner/Card/DayCard.vue'
import WeekChange from '@/components/MealPlanner/Banner/WeekChange.vue'

const props = defineProps(['date', 'day'])

// get the first day of week

const today = new Date() // automatically initializes to today's date
const first_day_of_week = today.getDate() - today.getDay()
const first_date_of_week = new Date(today.getFullYear(), today.getMonth(), first_day_of_week)
const formattedFirstDay = first_date_of_week.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
})

// get the week

const this_week = []
for (let i = 0; i < 7; i++) {
    const date = new Date(first_date_of_week)
    date.setDate(first_date_of_week.getDate() + i)
    this_week.push(date)
}

</script>

<template>
    <div class="container top">
        <WeekChange :day="formattedFirstDay" />
        <div class="container">
            <span class="material-symbols-outlined">
                view_week
            </span>|
            <span class="material-symbols-outlined">
                calendar_view_month
            </span>
        </div>
    </div>
    <div class="container days">
        <WeekViewDay v-for="day of this_week" :key="day" :date="day" />
    </div>
</template>

<style scoped>
.top {
    margin-bottom: 32px;
}

.material-symbols-outlined {
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 36;
}

span {
    font-size: 28px;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
}

.days {
    flex: 1;
    align-items: stretch;
}
</style>