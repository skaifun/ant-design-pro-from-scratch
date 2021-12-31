// https://umijs.org/config
import {defineConfig} from 'umi';

import routes from './routes';

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  // ==================== //
  //     UMI config       //
  // ==================== //

  // 是否启用按需加载，即是否把构建产物进行拆分，在需要的时候下载额外的JS再执行 https://umijs.org/zh-CN/config#dynamicimport
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading', // 指向loading组件文件
  },
  // 配置HTML的输出形式 https://umijs.org/zh-CN/config#exportstatic
  exportStatic: {},
  // 快速刷新（Fast Refresh），开发时可以保持组件状态，同时编辑提供即时反馈 https://umijs.org/zh-CN/config#fastrefresh
  fastRefresh: {},
  // 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存 https://umijs.org/zh-CN/config#hash
  hash: true,
  // 忽略moment的locale文件，用于减少尺寸 https://umijs.org/zh-CN/config#ignoremomentlocale
  ignoreMomentLocale: true,
  // 配置是否需要生成额外用于描述产物的manifest文件 https://umijs.org/zh-CN/config#manifest
  manifest: {
    basePath: '/',
  },
  // 开启mfsu功能(开启该功能将会自动开启webpack5和dynamicImport) https://umijs.org/zh-CN/config#mfsu
  mfsu: {},
  // 设置 node_modules 目录下依赖文件的编译方式 https://umijs.org/zh-CN/config#nodemodulestransform
  nodeModulesTransform: {
    type: 'none'
  },
  // 配置路由(外部导入) https://umijs.org/zh-CN/config#routes
  routes,
  // 配置需要兼容的浏览器最低版本 https://umijs.org/zh-CN/config#targets
  targets: {
    ie: 11,
  },
  // 配置主题，实际上是配less变量: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': '#28c64d',
    'root-entry-name': 'default',
  },
  // 配置标题 https://umijs.org/zh-CN/config#title
  title: false, // 通过react-helmet等方式渲染title，配title: false可禁用内置的title渲染机制
  // 使用webpack 5代替webpack 4进行构建 https://umijs.org/zh-CN/config#webpack5
  webpack5: {},


  // ==================== //
  //       Plugins        //
  // ==================== //

  // https://umijs.org/zh-CN/plugins/plugin-antd
  antd: {
    dark: false, // 暗色主题
    compact: true, // 紧凑主题
    config: { // 全局配置 https://ant.design/components/config-provider-cn/
      componentSize: 'small',
    }
  },

  // https://umijs.org/zh-CN/plugins/plugin-dva
  dva: {
    hmr: true, // 是否启用 dva model 的热更新
  },

  // https://umijs.org/zh-CN/plugins/plugin-layout
  layout: {
    locale: true, // 是否启用侧边栏国际化
    siderWidth: 208, // 侧边栏宽度
    navTheme: 'light',
    primaryColor: '#28C64D',
    layout: 'side',
    contentWidth: 'Fluid',
    fixedHeader: false,
    fixSiderbar: true,
    colorWeak: false,
    title: 'Unicorn',
    iconfontUrl: '',
  },

  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    default: 'zh-CN', // 默认中文
    antd: true, // 启用antd的国际化
    baseNavigator: true, // 浏览器语言检测
  },
})
