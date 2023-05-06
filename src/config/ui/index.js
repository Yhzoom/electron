import * as config from "./color";
export class UI {
  constructor() {
    this.config = config
  }
  static getConfig(){
    return this.config
  }
  static getColor(){
    return this.config
  }
}
