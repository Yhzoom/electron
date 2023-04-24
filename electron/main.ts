/*
 * @Author       : haungyh
 * @Date         : 2023-03-04 17:35:30
 * @LastEditors  : huangyh
 * @LastEditTime : 2023-03-04 18:45:21
 * @Description  : 
 * @FilePath     : /electron/electron/main.ts
 */
import { app, BrowserWindow } from 'electron'
import path from 'path'
//app 控制应用程序的事件生命周期。
//BrowserWindow 创建并控制浏览器窗口。
 
let win: BrowserWindow | null;
//定义全局变量获取 窗口实例
 
const createWindow = () => {
    win = new BrowserWindow({
        //
        webPreferences: {
            devTools: true,
            contextIsolation: false,
            nodeIntegration: true
            //允许html页面上的javascipt代码访问nodejs 环境api代码的能力（与node集成的意思）
        }
    })
    if (app.isPackaged) {
        win.loadFile(path.join(__dirname, "../index.html"));
    } else {
        // console.log(process.env) 打印出来就知道 用的是哪个字段
        win.loadURL(`${process.env['VITE_DEV_SERVER_URL']}`)
    }
}
//isPackage 不好使换下面的
  //  if(process.env.NODE_ENV != 'development'){
      //  win.loadFile(path.join(__dirname, "../index.html"));
  //  }else{
        //win.loadURL(`http://${process.env['VITE_DEV_SERVER_HOSTNAME']}:${process.env['VITE_DEV_SE//RVER_PORT']}`)
   // }
//在Electron完成初始化时被触发
app.whenReady().then(createWindow)