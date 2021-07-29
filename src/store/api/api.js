import axios from "axios";

//包装ajax 请求
const http = axios.create({
  baseURL: `https://music-api-4p49vwxc6-music-api.vercel.app`,
  timeout: 10000,
});
//获得列表
export function getArticle(id) {
  return http({ url: `/articles/${id}` });
}
