import Vue from "vue";
import {
  Row,
  Form,
  FormItem,
  Input,
  Button,
  Col,
  Menu,
  MenuItem,
  Submenu,
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Loading,
  Table,
  TableColumn,
  Tag,
  Popover,
  Backtop,
} from "element-ui";
Vue.use(Row);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Col);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Aside);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tag);
Vue.use(Popover);
Vue.use(Backtop);

Vue.prototype.$loading = Loading.service;

export default class Components {}
