<template>
  <div class="Discovery">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <audio :src="url" controls ref="audio" autoplay></audio>
    <van-row
      v-for="(item, index) of list"
      :key="index"
      @click="link(item.id)"
      class="list"
    >
      <van-col span="8" :data="item.id">name:{{ item.name }} </van-col>
      <van-col span="8">时长:{{ item.duration }} </van-col>
      <van-col span="8">mark: {{ item.mark }}</van-col>
    </van-row>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  name: "Discovery",
  data() {
    return {
      value: "",
      list: [],
      url: "",
    };
  },
  computed: {
    ...mapState(["valS"]),
  },
  methods: {
    ...mapActions(["search"]),
    async onSearch(val) {
      this.valS = val;
      // Toast(val);
      // this.search()
      // const loading = this.$loading();
      // const res = await axios({
      //   url: `http://localhost:3000/search?keywords=${val}`,
      // });
      //console.log((this.list = res.data.result.songs));
      // try {
      //   await
      // } catch (e) {
      //   this.$message.error("网络错误，请刷新重试");
      // } finally {
      //   loading.close();
      // }
      // axios
      //   .get(`http://localhost:3000/search?keywords=${val}`)
      //   .then((res) => {
      //     // console.log(res.data.result.songs);
      //     this.list = res.data.result.songs;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    onCancel() {
      Toast("取消");
    },
    link(id) {
      //查询到歌曲得id
      axios
        .get(`http://localhost:3000/song/url?id=${id}`)
        .then((res) => {
          this.url = res.data.data[0].url;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.list {
  margin-top: 15px;
  border-bottom: 1px #ff0000 solid;
}
</style>
