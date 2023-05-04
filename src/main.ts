/*
 * @Author       : haungyh
 * @Date         : 2023-03-04 17:25:39
 * @LastEditors  : huangyh
 * @LastEditTime : 2023-04-25 11:08:33
 * @Description  : 
 * @FilePath     : /electron/src/main.ts
 */
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import drag from "v-drag"
import { pinia } from './storage/pinia'

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css'
import './scss/dark-theme.scss'

import './style.css';
import App from './App.vue';

const app = createApp(App)
app.use(pinia)
app.use(ElementPlus)
app.use(drag)
app.mount('#app')
