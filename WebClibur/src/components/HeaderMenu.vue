<template>

    <!-- Just an image -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" >
    <router-link :to="{ name: 'Home'}">
        <img src="../assets/vue.svg" width="30" height="30" alt="">
    </router-link>
  </a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="navbar-item">
            <router-link :to="{name:'Empleo'}">
                Empleo
            </router-link>
        </a>
      </li>
      <li class="nav-item">
            <a class="navbar-item">
            <router-link :to="{name:'Home'}">
                Home
            </router-link>
        </a>
      </li>
    </ul>
</nav>
</template>

<style scoped>

</style>