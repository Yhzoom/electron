/*
 * @Author       : haungyh
 * @Date         : 2023-03-04 17:25:39
 * @LastEditors  : huangyh
 * @LastEditTime : 2023-05-08 10:57:00
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

import 'vant/lib/index.css';
import { 
  Swipe, SwipeItem, 
  Icon, 
  Image as VanImage,
   Loading as VanLoading, 
   Toast, 
   Cell as VanCell,
    CellGroup as VanCellGroup,
     Popup as VanPopup, Search,
      Collapse, CollapseItem 
    } from 'vant';

import './style.css';
import App from './App.vue';

const app = createApp(App)
app.use(pinia)
app.use(ElementPlus)
.use( Swipe )
.use( Icon )
.use( SwipeItem )
.use( VanImage )
.use( Toast )
.use(VanCell)
.use(VanCellGroup)
.use(VanLoading)
.use(VanPopup)
.use( Search)
.use( Collapse)
.use( CollapseItem)
app.use(drag)
app.mount('#app')
