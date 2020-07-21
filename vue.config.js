module.exports = {
  //打包的基本路径
  publicPath: "./",
  runtimeCompiler: true,
  // lintOnSave: process.env.NODE_ENV === 'development', // 本地开发时开启eslint规范
  lintOnSave: false, // 本地开发时开启eslint规范
  css: {
    loaderOptions: {
      // sass: {
      //   prependData: `@import "./src/assets/scss/style.scss";`,
      // },
      css: {},
      // rem布局的设置
      // postcss: {
      //   plugins: [
      //     require("postcss-px2rem")({
      //       remUnit: 37.5,
      //     }),
      //   ],
      // },
    },
  },
  devServer: {
    // https: true,
    host: "0.0.0.0",
    // host:'127.0.0.1',
    // port: 8081, //端口号
    allowedHosts: ["planttree.iflashtech.com"],
    // headers:{
    //   'Access-Control-Allow-Origin':"*",
    // },
    proxy: {
      "/apiserve": {
        // 公司的请求接口地址
        target: "https://planttree.iflashtech.com",
        ws: true, //// 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/apiserve": "", //这里重写路径，规定请求地址以什么开头
        },
      },
    },
  },
};
// .env.development
