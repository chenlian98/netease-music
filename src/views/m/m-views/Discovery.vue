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
let api = `https://music-api-4p49vwxc6-music-api.vercel.app`;
import { Toast } from "vant";
import { Howl } from "howler";

// import { mapState, mapActions } from "vuex";
import axios from "axios";
export default {
  name: "Discovery",
  data() {
    return {
      value: "",
      url: "",
      valS: "",
      list: [],
    };
  },
  computed: {
    // ...mapState("search", ["list", "valS"]),
  },
  methods: {
    // ...mapActions("search", ["getSong"]),
    onSearch(val) {
      axios
        .get(`${api}/search?keywords=${val}`)
        .then((res) => {
          // console.log(res.data.result.songs);
          this.list = res.data.result.songs;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onCancel() {
      Toast("取消");
    },
    link(id) {
      // console.log(id);
      //查询到歌曲得id
      axios
        .get(`${api}/song/url?id=${id}`)
        .then((res) => {
          this.url = res.data.data[0].url;
          let sound = new Howl({
            src: [this.url, "sounds.mp3"],
            sprite: {
              blast: [0, 3000],
              laser: [4000, 1000],
              winner: [6000, 5000],
            },
          });
          // Shoot the laser!
          sound.play("laser");
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
