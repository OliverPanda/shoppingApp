<template>
  <div id="app">
    <img src="./assets/logo.png">

      <transition name="fade">

        <router-view></router-view>

    </transition>

  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style lang="scss">
@import "./style/reset";
</style>
