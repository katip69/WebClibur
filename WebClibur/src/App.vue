
<template>
  <Header></Header>
  <main class="main-wrapper">
    <router-view />
  </main>
</template>

<script setup>
import Header from './components/HeaderMenu.vue'
</script>


<style scoped>
.main-wrapper {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
</style>