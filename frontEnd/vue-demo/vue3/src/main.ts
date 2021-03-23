import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/**
 * ---------------------------------------------------------------------------------------
 * 按需引入 antd-vue3  当前版本 V2.0
 */
import Antd from '@/components/thirdParty/UI/antd-vue3-2x/index'
import 'ant-design-vue/dist/antd.css';
/**
 * 全部引入
 * import Antd from 'ant-design-vue';
 * ---------------------------------------------------------------------------------------
 */


/**
 * ---------------------------------------------------------------------------------------
 * 按需引入 ElementPlus 饿了么vue3 
 */
import ElementPlus from '@/components/thirdParty/UI/element-plus/index';
import 'element-plus/lib/theme-chalk/index.css';
/**
 * 全部引入
 * import ElementPlus from 'element-plus';
 * ---------------------------------------------------------------------------------------
 */



// Vue.use(BaiduMap, {
//   /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
//   ak: 'YOUR_APP_KEY'
// })

/**
 * ---------------------------------------------------------------------------------------
 * 前端 假数据
 */
require('./mock/index')

// app.config.globalProperties.$ELEMENT = option

createApp(App)
  .use(store)
  .use(Antd)
  .use(ElementPlus)
  .use(router)
  .mount("#app");
