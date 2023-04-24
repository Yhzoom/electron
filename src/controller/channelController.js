/*
 * @Author       : huangyh
 * @Date         : 2022-10-26
 * @LasterEditor : huangyh
 * @Descriptions  : 频道
 * @FilePath: /editor/src/views/editor/controller/channelController.js
 */

import { requestGetChannelList } from '../service';
import { staticStorage } from '../storage/staticStorage';
//  获取频道列表
export function getChannelList ()
{
  let params = {};

  requestGetChannelList().then((res) =>
  {
    staticStorage.channelList = res.records;
  });
}
