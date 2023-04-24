/*
 * @Author       : huangyh
 * @Date         : 2022-10-17
 * @LasterEditor : huangyh
 * @Desriptions  : 底部导航页面
 * @FilePath     : /src/views/editor/storage/constant/navPage.js
 */
export const navPageList = [
  {
    name:'首页（原生）',
    code: 'ORIGINAL_HOME_TAB'
  },
  {
    name:'赞品（原生）',
    code:'ORIGINAL_SHOP_TAB'
  },
  {
    name:'我的（原生）',
    code: 'ORIGINAL_MINE_TAB'
  },
  {
    name:'首页（原生,南能局）',
    code: 'ORIGINAL_NFJG_TAB'
  },
  {
    name:'聊一聊（原生）',
    code: 'ORIGINAL_CHAT_TAB'
  },
  {
    name:'公告栏（原生）',
    code: 'ORIGINAL_NOTICE_BOARD'
  },
  {
    name:'通讯录（原生）',
    code: 'ORIGINAL_ADDRESS_LIST'
  },
  {
    name:'视频会议（原生）',
    code: 'ORIGINAL_MEETING_TAB'
  },
  {
    name:'云桌面（原生）',
    code: 'ORIGINAL_DESKTOP_TAB'
  }
];
  // 'ORIGINAL＿CLOUD＿TAB'这个名字角色名,为什么旧版多出来
  // 用来判断页面code 是否属于navPage的
const codes = ['ORIGINAL_CLOUD_TAB'];

navPageList.map((item) =>
{
  codes.push(item.code);
});

export const navPageCodes = codes;