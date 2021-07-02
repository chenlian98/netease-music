module.exports = {
  //"es2015", { modules: false }] 热更新的代码
  presets: [["es2015", { modules: false }], ["@vue/cli-plugin-babel/preset"]],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
