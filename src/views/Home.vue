<template>
  <div class="container">
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
    <el-container class="my">
      <el-aside width="250px">
        <div class="my">
          <span>我的歌手</span>
          <span>8</span>
        </div>
        <div class="add-songList">
          <span>我创建的歌单</span>
          <span>(1)</span>
          <el-button type="primary">新建</el-button>
        </div>
      </el-aside>
      <el-container>
        <el-main>
          <div class="box">
            <el-row :gutter="20">
              <el-col :span="8">
                <div>
                  <img src="https://p1.music.126.net/1WDelIPIXlG3YYyJk7zBYA==/109951165462542435.jpg?param=200y200">
                </div>
              </el-col>
              <el-col :span="10">
                <div class="likeMusic">
                  <div class="">我喜欢的音乐</div>
                  <div class="">
                    <span>用户名</span>
                    <span>2018-11-20创建</span>
                  </div>
                  <div class="btn">
                    <el-button type="primary" icon="el-icon-edit">播放</el-button>
                    <el-button type="primary" icon="el-icon-share" disabled>收藏</el-button>
                    <el-button type="primary" icon="el-icon-share">分享</el-button>
                    <el-button type="primary" icon="el-icon-edit">下载</el-button>
                    <el-button type="primary">评论</el-button>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
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
<style lang="less" scoped>
@calcSize: calc(100vh - 61px);
@center: 0 auto;
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: @calcSize;
  //line-height: 160px;
  .box {
      padding: 40px;
  }
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 50px;
  .add-songList {
    span{
      margin-right: 7px;
    }
    button {
      height: 35px;
    }
  }
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
