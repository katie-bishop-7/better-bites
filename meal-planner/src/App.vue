<script setup>
import { ref } from 'vue';
import NavigationBar from './components/Page/NavigationBar/NavigationBar.vue';
import BottomBar from './components/Page/BottomBar.vue';

</script>

<template>
  <NavigationBar /> <!-- Navigation bar at the top of the page -->
  <div id="page">
    <router-view /> <!-- Render different pages here -->
    <BottomBar />
  </div>
 
</template>

<style scoped>

#page {
  position: absolute;
  left: 132px;
  right: 132px;
  top: 200px;
  bottom: 0px;

  display: flex;
  flex-direction: column;
  z-index: -2;
}
</style>
