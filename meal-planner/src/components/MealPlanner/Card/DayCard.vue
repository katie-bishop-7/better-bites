<script setup>
import DailyMeal from '@/components/MealPlanner/Card/Contents/DailyMeal.vue'
const props = defineProps({
    date: {
        type: Date,
        required: true,
    },
    meal_title: {
        type: String,
        required: false,
    }
})

</script>

<template>
    <div class="day-card">
        <div class="container bhline">
            <h2>
                {{ date.toLocaleDateString('en-US', {
                    weekday: 'long',
                }) }}
            </h2>
            <h2>
                {{ date.toLocaleDateString('en-US', {
                    month: 'numeric',
                    day: 'numeric'
                }) }}
            </h2>
        </div>
        <div class="bhline">
            <DailyMeal meal_title="Breakfast"/>
        </div>
        <div class="bhline">
            <DailyMeal meal_title="Lunch"/>
        </div>
        <DailyMeal meal_title="Dinner"/>
        
    </div>

</template>

<style scoped>
.day-card {
    width: fit-content;
    padding: 16px;
    gap: 16px;

    border: 1px solid black;
    border-radius: 9px;
}

.bhline {
    border-bottom: 1px solid black;
    padding: 8px 0;
    margin-bottom: 8px;
}

.container {
    display: flex;
    justify-content: space-between;
}
</style>