<template>
  <div class="TOPComponent" @click="toTop()" ref="top">TOP</div>
</template>

<script>
export default {
  name: "TOPComponent",
  methods: {
    toTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      window.pageYOffset = 0;
    },
    scrollMonitor() {
      let sTop = document.body.scrollTop || document.documentElement.scrollTop;
      console.log(sTop);
      if (sTop > 30) {
        this.$refs.top.style.display = "block";
      } else {
        this.$refs.top.style.display = "none";
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollMonitor);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollMonitor);
  },
};
</script>

<style lang="less" scoped>
html {
  scroll-behavior: smooth;
}
.TOPComponent {
  cursor: pointer;
  position: fixed;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  right: 30px;
  bottom: 40%;
  background-color: #929292;
  color: #ffffff;
  display: none;
}
</style>
