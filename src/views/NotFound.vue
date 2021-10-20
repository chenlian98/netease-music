<template>
  <div class="NotFound">
    <div class="content">
      <div class="return_btns">
        对不起，您访问的页面未能找到 ~~，
        <router-link :to="{ name: 'Home' }">返回首页</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.content {
  width: 658px;
  height: 335px;
  background: url(https://www.17sucai.com/preview/32325/2021-05-10/404/images/404.png)
    50% top no-repeat;
  margin: 80px auto 0;
  position: relative;
}
.return_btns {
  color: #666;
  position: absolute;
  left: 0px;
  bottom: 0px;
  font-size: 20px;
  text-align: center;
  width: 100%;
}
.return_btns a {
  color: #1da2f0;
  font-family: "Microsoft Yahei", serif;
  text-decoration: underline;
}
.return_btns a:link,
.return_btns a:visited {
  color: #1da2f0;
}
</style>
