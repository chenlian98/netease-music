<template>
  <div class="admin">
    <div>我是admin</div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"
        ><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item
      >
    </el-menu>
    <div class="item">
      <router-link exact-active-class="active" :to="{ name: 'haizi' }"
        >haizi</router-link
      >
      <router-link exact-active-class="active" :to="{ name: 'nihao' }"
        >你好</router-link
      >
      <router-link exact-active-class="active" :to="{ name: 'posts' }"
        >posts</router-link
      >
      <Carousel v-model="value1" loop>
        <CarouselItem>
          <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">4</div>
        </CarouselItem>
      </Carousel>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      activeIndex2: "1",
      value1: 0
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped lang="less">
.item {
  a {
    display: inline-block;
    width: 300px;
    text-decoration: none;
    line-height: 40px;
    font-size: 40px;
    color: orange;
  }
  .active {
    color: red;
    background-color: black;
  }
}
</style>
