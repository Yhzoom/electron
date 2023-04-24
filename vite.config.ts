/*
 * @Author       : haungyh
 * @Date         : 2023-03-04 17:25:39
 * @LastEditors  : huangyh
 * @LastEditTime : 2023-03-06 19:11:45
 * @Description  : 
 * @FilePath     : /electron/vite.config.ts
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [vue(), electron({
  //   entry: 'electron/main.ts',
  // })],
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})