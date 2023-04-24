/*
 * @Author       : haungyh
 * @Date         : 2023-03-04 17:25:39
 * @LastEditors  : huangyh
 * @LastEditTime : 2023-03-07 21:10:05
 * @Description  : 
 * @FilePath     : /electron/src/main.ts
 */
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import drag from "v-drag"
import { pinia } from './storage/pinia'

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style.css';
import App from './App.vue';

const app = createApp(App)
app.use(pinia)
app.use(ElementPlus)
app.use(drag)
app.mount('#app')
