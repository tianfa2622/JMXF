// configureWebpack: {
//   resolve: {
//     extensions:['.js', '.vue', '.json'],
//     alias:{
//       '@':resolve('src'),
//       '~':process.cwd(),
//       public:resolve('public'),
//       components:resolve('src/components'),
//       util:resolve('src/utils'),
//       store:resolve('src/store'),
//       router:resolve('src/router')
//     }
//   }
// }
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  // 配置跨域请求
  devServer: {
    open: true, // 是否自动打开浏览器
    https: false, // 是否开启https
    hotOnly: false,
    proxy: {
      // 配置跨域
      '/java': {
        // target: 'http://192.168.1.22:8084/',
        target: 'http://192.168.1.25:8084/',
        // target: 'http://pm2.winvers.com/zhdxhd',
        ws: true,
        secure: false,
        changOrigin: true, // 是否允许跨越
        pathRewrite: {
          '^/java': ''
        }
      },
      '/apis': {
        // target: 'http://192.168.1.22:8084/',
        target: 'http://192.168.1.25:8084/',
        // target: 'http://pm2.winvers.com/zhdxhd',
        ws: true,
        secure: false,
        changOrigin: true, // 是否允许跨越
        pathRewrite: {
          '^/apis': ''
        }
      }
    },
    // eslint-disable-next-line no-unused-vars
    before: app => {}
  }
}
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

//   outputDir: 'dist',

//   assetsDir: 'assets',

//   filenameHashing: false,

//   lintOnSave: false,

//   productionSourceMap: false,

//   chainWebpack: config => {
//     config.module
//       .rule('swf')
//       .test(/\.swf$/)
//       .use('url-loader')
//       .loader('url-loader')
//       .options({
//         limit: 10000
//       })
//   },
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://pm2.winvers.com/zhdxhd',
//         // target: 'http://192.168.1.9:8084',
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api': ''
//         }
//       }
//     }
//   }
// }
