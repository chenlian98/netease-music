<template>
  <div class="admin">
    <div class="item">
      <router-link exact-active-class="active" :to="{ name: 'Discovery' }"
        >发现</router-link
      >
      <router-link exact-active-class="active" :to="{ name: 'Podcast' }"
        >播课</router-link
      >
      <router-link exact-active-class="active" :to="{ name: 'User' }"
        >我的</router-link
      >
      <router-link exact-active-class="active" :to="{ name: 'Forum' }"
        >论坛</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "MHome",
};
</script>

<style scoped lang="less">
html {
  font-size: 13.333333333333334vw;
}
.item {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  a {
    display: inline-block;
    width: calc(100% / 4);
    text-decoration: none;
    line-height: 3rem;
    font-size: 1.5rem;
    color: orange;
  }
  .active {
    color: #fd9696;
    background-color: #bfbfbf;
  }
}
</style>
