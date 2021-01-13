<template>
  <div>
    导航栏 | <router-link to="/">Peng</router-link> |
    <router-link to="/xxx">Peng2</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>
