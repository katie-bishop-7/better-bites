<script setup>
import { ref } from 'vue';
import NavigationBar from './NavigationBar.vue';

const newTask = ref('')
const tasks = ref(['task 1', 'task 2', 'task 3'])
const deleteTask = (idx) => tasks.value.splice(idx, 1)
const addTask = () => {
  tasks.value.push(newTask.value);
  newTask.value = '';
}

</script>

<template>
  <div id="app">
    <NavigationBar/>
    <h1>Tasks</h1>
    <form @submit.prevent="addTask">
      <label>New Task
        <input type="text" id="newTask" v-model="newTask"/>
        <button type="submit">Submit</button>
      </label>
    </form>
    <ul>
      <li v-for="(task, idx) in tasks" :key="task">{{ task }}
        <button @click="deleteTask(idx)">
          x
        </button>
      </li>
    </ul>
  </div>
</template>

<style>

a:hover {
  
}
</style>
