import Vue from "vue";
import { Button, Search, Col, Row } from "vant";

// 方式一. 通过 Vue.use 注册
// 注册完成后，在模板中通过 <van-button> 或 <VanButton> 标签来使用按钮组件
Vue.use(Button);
Vue.use(Search);
Vue.use(Col);
Vue.use(Row);
