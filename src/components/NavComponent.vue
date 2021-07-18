<template>
  <div class="NavComponent">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo nav"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" disabled>发现音乐</el-menu-item>
      <el-menu-item index="2">我的音乐</el-menu-item>
      <el-menu-item index="3">朋友</el-menu-item>
      <el-menu-item index="3" disabled>商城</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavComponent",
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.NavComponent {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
</style>
