<template>
  <div class="container">
    <nav-component />
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
            <el-row :gutter="0">
              <el-col :span="5">
                <div class="cover">
                  <img
                    src="https://p1.music.126.net/1WDelIPIXlG3YYyJk7zBYA==/109951165462542435.jpg?param=200y200"
                  />
                </div>
              </el-col>
              <el-col :span="10">
                <div class="likeMusic">
                  <div class="like">我喜欢的音乐</div>
                  <div class="username">
                    <span>用户名</span>
                    <span>2018-11-20创建</span>
                  </div>
                  <div class="btn">
                    <el-button
                      type="primary"
                      icon="el-icon-edit"
                      @click="playMusic()"
                      >播放</el-button
                    >
                    <el-button type="primary" icon="el-icon-share" disabled
                      >收藏</el-button
                    >
                    <el-button type="primary" icon="el-icon-share"
                      >分享</el-button
                    >
                    <el-button type="primary" icon="el-icon-edit"
                      >下载</el-button
                    >
                    <el-button type="primary">评论</el-button>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="0" class="list-title">
              <el-col :span="5">
                <div class="list">
                  <span>歌曲列表</span>
                  <span>19首歌曲</span>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="likeMusic">
                  <span>播放</span>
                  <span>62次</span>
                </div>
              </el-col>
            </el-row>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column label="歌曲标题" width="180">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column label="时长" width="180">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference" class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="歌手" width="180">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference" class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="专辑" width="180">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference" class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                    >编辑</el-button
                  >
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <audio :src="url" autoplay controls>播放</audio>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <TOPComponent />
  </div>
</template>
<script>
import TOPComponent from "@/components/TOPComponent";
import NavComponent from "@/components/NavComponent";
import axios from "axios";
import Wapiti from "../../api.js";
let api = Wapiti.http;
export default {
  components: {
    TOPComponent,
    NavComponent,
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      url: "",
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    playMusic() {
      axios
        .get(`${api}/user/account`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="less" scoped>
@center: 0 auto;
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  padding: 40px 0 0;
  .box {
    .list-title {
      margin-top: 20px;
      border-bottom: 3px solid red;
      padding-bottom: 5px;
    }
    .cover {
    }
    .likeMusic {
      .like,
      .username {
        color: #000;
        margin-bottom: 10px;
      }
    }
    audio {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      width: 100%;
      height: 80px;
    }
  }
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 50px;
  .my {
    padding-top: 40px;
  }
  .add-songList {
    span {
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
