/*
 * @Author       : haungyh
 * @Date         : 2023-04-25 22:31:30
 * @LastEditors  : huangyh
 * @LastEditTime : 2023-05-08 10:31:33
 * @Description  : 
 * @FilePath     : /electron/src/storage/uiStorage/config.js
 */
export const colorBase = [{
  value: '#000',
  code: '--van-black',
  name: '黑',
},
{
  value: '#fff',
  code: '--van-white',
  name: '白',
},
{
  value: '#f7f8fa',
  code: '--van-gray-1',
  name: '灰1',
},
{
  value: '#f2f3f5',
  code: '--van-gray-2',
  name: '灰1',
},
{
  value: '#ebedf0',
  code: '--van-gray-3',
  name: '灰1',
},
{
  value: '#dcdee0',
  code: '--van-gray-4',
  name: '灰1',
},
{
  value: '#c8c9cc',
  code: '--van-gray-5',
  name: '灰1',
},
{
  value: '#969799',
  code: '--van-gray-6',
  name: '灰1',
},
{
  value: '#646566',
  code: '--van-gray-7',
  name: '灰1',
},
{
  value: '#323233',
  code: '--van-gray-8',
  name: '灰1',
},
{
  value: '#969799',
  code: '--van-gray-6',
  name: '黑',
},
{
  value: '#ee0a24',
  code: '--van-red',
  name: '红',
},
{
  value: '#1989fa',
  code: '--van-blue',
  name: '黑',
},
{
  value: '#ff976a',
  code: '--van-orange',
  name: '黑',
},
{
  value: '#ed6a0c',
  code: '--orange-dark',
  name: '黑',
},
{
  value: '#fffbe8',
  code: '--orange-light',
  name: '黑',
},
{
  value: '#07c160',
  code: '--orange-green',
  name: '黑',
}
]

// 主色调
export const primaryColor = {
    value: 'var(--van-blue)',
    code: '--van-primary-color',
    name: '主色调'
  }
// 辅助色
export const subColor = {
    value: 'var(--van-orange-dark)',
    code: '--van-assist-color',
    name: '辅助色（用于强调、标签等位置）'
  }
// 功能色
export const functionalColor = [{
    value: 'var(--van-green)',
    code: '--van-success-color',
    name: '成功/正常状态'
  },{
    value: 'var(--van-red)',
    code: '--van-danger-color',
    name: '错误 /失败态'
  },{
    value: '#DCA550',
    code: '--van-warning-color',
    name: '中间 / 警示态'
  },{
    value: 'var(--van-blue)',
    code: '--van-link-color',
    name: '进行中/链接'
  },{
    value: 'var(--van-gray-6)',
    code: '--van-disabled-color',
    name: '禁止/停止状态'
  }
]

export const backgroundColor = [{
    value: 'linear-gradient(to right, #ff6034, #ee0a24)',
    code: '--van-gradient-red',
    name: '渐变色红'
  },{
    value: 'linear-gradient(to right, #ffd01e, #ff8917)',
    code: '--van-gradient-orange',
    name: '渐变色绿'
  },{
    value: 'var(--van-gray-1)',
    code: '--van-background',
    name: '灰色背景'
  },{
    value: 'var(--van-white)',
    code: '--van-background-2',
    name: '白色背景'
  },{
    value: 'var(--van-white)',
    code: '--van-background-3',
    name: '白色背景'
  }]

  export const linkColor = [
    {
    value: '#576b95',
    code: '--van-link-color',
    name: '链接颜色'
  }
  ]
  export const activeColor = [
    {
    value: 'var(--van-gray-2)',
    code: '--van-active-color',
    name: '点击过的链接颜色'
  }
  ]
  export const activeOpacity = [
    {
    value: '0.6',
    code: '--van-active-opacity',
    name: '点击过的链接颜色透明度'
  }
  ]
  export const disabledOpacity = [
    {
    value: '0.5',
    code: '--van-disabled-opacity',
    name: '禁用透明度'
  }
  ]
// 内外边距
  export const padding = [
    {
    value: '4px',
    code: '--van-padding-base',
    name: '边距-基础'
  },{
    value: '8px',
    code: '--van-padding-xs',
    name: '边距-xs'
  },{
    value: '12px',
    code: '--van-padding-sm',
    name: '边距-sm'
  },{
    value: '16px',
    code: '--van-padding-md',
    name: '边距-md'
  },{
    value: '24px',
    code: '--van-padding-lg',
    name: '边距-lg'
  },{
    value: '32px',
    code: '--van-padding-xl',
    name: '边距-xl'
  }
  ]

  // 字体
export const textFont = [
  {
  value: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Segoe UI, Arial, Roboto, "PingFang SC", "miui", "Hiragino Sans GB", "Microsoft Yahei", sans-serif',
  code: '--van-base-font',
  name: '基础字体',
  remark: '用于正文二级标题、正文内容'
},{
  value: 'avenir-heavy, "PingFang SC", helvetica neue, arial, sans-serif',
  code: '--van-price-font',
  name: '价格字体'
}
]

// 文字颜色
export const textColor = [
  {
    value: 'var(--van-gray-8)',
    code: '--van-text-color',
    name: '主色调'
  },
  {
    value: 'var(--van-gray-6)',
    code: '--van-text-color-2',
    name: '辅助色（用于强调、标签等位置）'
  },
  {
    value: 'var(--van-gray-5)',
    code: '--van-text-color-3',
    name: '成功/正常状态'
  },
  {
    value: 'var(--van-red)',
    code: '--van-danger-color',
    name: '错误 /失败态'
  },
  {
    value: '#DCA550',
    code: '--van-warning-color',
    name: '中间 / 警示态'
  }
]
// 字体大小
export const fontSize = [
  {
  value: '10px',
  code: '--van-font-size-xs',
  name: '字体大小-xs'
},{
  value: '12px',
  code: '--van-font-size-sm',
  name: '字体大小-sm'
},{
  value: '14px',
  code: '--van-font-size-md',
  name: '字体大小-md'
},{
  value: '16px',
  code: '--van-font-size-lg',
  name: '字体大小-lg'
},{
  value: '18px',
  code: '--van-font-size-xl',
  name: '字体大小-xl'
}
]
// 行高
export const lineHeight = [
  {
  value: '14px',
  code: '--van-line-height-xs',
  name: '行高-xs'
},{
  value: '18px',
  code: '--van-line-height-sm',
  name: '行高-sm'
},{
  value: '20px',
  code: '--van-line-height-md',
  name: '行高-md'
},{
  value: '22px',
  code: '--van-line-height-lg',
  name: '行高-lg'
},{
  value: '26px',
  code: '--van-line-height-xl',
  name: '行高-xl'
}
]


// 边框
export const borderWidth = [
  {
  value: '1px',
  code: '--van-border-width',
  name: '边框线'
}
]
export const borderColor = [
  {
  value: '1px',
  code: '--van-border-color',
  name: '边框线'
}
]
export const borderRadius = [
 {
  value: '2px',
  code: '--van-radius-sm',
  name: '圆角-sm'
},{
  value: '4px',
  code: '--van-radius-md',
  name: '圆角-md'
},{
  value: '8px',
  code: '--van-radius-lg',
  name: '圆角-lg'
},{
  value: '14px',
  code: '--van-radius-xl',
  name: '圆角-xl'
},{
  value: '999px',
  code: '--van-radius-max',
  name: '圆角-max'
}
]


// --van-gradient-red: linear-gradient(to right, #ff6034, #ee0a24);
//   --van-gradient-orange: linear-gradient(to right, #ffd01e, #ff8917);
//   --van-primary-color: var(--van-blue);
//   --van-success-color: var(--van-green);
//   --van-danger-color: var(--van-red);
//   --van-warning-color: var(--van-orange);
//   --van-text-color: var(--van-gray-8);
//   --van-text-color-2: var(--van-gray-6);
//   --van-text-color-3: var(--van-gray-5);
//   --van-link-color: #576b95;
//   --van-active-color: var(--van-gray-2);
//   --van-active-opacity: .6;
//   --van-disabled-opacity: .5;
//   --van-background: var(--van-gray-1);
//   --van-background-2: var(--van-white);
//   --van-background-3: var(--van-white);

//   --van-padding-base: 4px;
//   --van-padding-xs: 8px;
//   --van-padding-sm: 12px;
//   --van-padding-md: 16px;
//   --van-padding-lg: 24px;
//   --van-padding-xl: 32px;
//   --van-font-bold: 600;
//   --van-font-size-xs: 10px;
//   --van-font-size-sm: 12px;
//   --van-font-size-md: 14px;
//   --van-font-size-lg: 16px;
//   --van-line-height-xs: 14px;
//   --van-line-height-sm: 18px;
//   --van-line-height-md: 20px;
//   --van-line-height-lg: 22px;
//   --van-base-font: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Segoe UI, Arial, Roboto, "PingFang SC", "miui", "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
//   --van-price-font: avenir-heavy, "PingFang SC", helvetica neue, arial, sans-serif;
//   --van-duration-base: .3s;
//   --van-duration-fast: .2s;
//   --van-ease-out: ease-out;
//   --van-ease-in: ease-in;
//   --van-border-color: var(--van-gray-3);
//   --van-border-width: 1px;
//   --van-radius-sm: 2px;
//   --van-radius-md: 4px;
//   --van-radius-lg: 8px;
//   --van-radius-max: 999px