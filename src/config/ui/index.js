/*
 * @Author       : haungyh
 * @Date         : 2023-05-06 09:38:25
 * @LastEditors  : huangyh
 * @LastEditTime : 2023-05-08 10:16:25
 * @Description  : UI 配置实例
 * @FilePath     : /electron/src/config/ui/index.js
 */
import * as config from "./color";
import { singleton }  from "@/utils/util";

class UI {
  constructor() {
    this.config = config
  }
  get(){
    return this.config
  }
  static getColor(){
    return this.config
  }
}

export const UIConfig = singleton(UI)
