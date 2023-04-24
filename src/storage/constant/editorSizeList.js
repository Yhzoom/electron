// 编辑窗口尺寸
const editorSizeList = [
  {
    label: 'iPhone 6 (750*1134) ',
    navtiveWidth: '750',
    navtiveHeight: '1134',
    type: 'ios'
  },
  {
    label: 'iPhone 5 (640*1136) ',
    navtiveWidth: '640',
    navtiveHeight: '1136',
    type: 'ios'
  },
  {
    label: '三星 S5 （1080＊1920） ',
    navtiveWidth: '1080',
    navtiveHeight: '1920',
    type: 'android'
  },
  {
    label: '荣耀7（1080＊1920）',
    navtiveWidth: '1080',
    navtiveHeight: '1920',
    type: 'android'
  },
  {
    label: '华为P8 （1080＊1920）',
    navtiveWidth: '1080',
    navtiveHeight: '1920',
    type: 'android'
  },
  {
    label: 'iPhone 6 Plus (1242*2208) ',
    navtiveWidth: '1242',
    navtiveHeight: '2208',
    type: 'ios'
  },
  {
    label: 'iPhone X (1125*2436) ',
    navtiveWidth: '1125',
    navtiveHeight: '2436',
    type: 'ios'
  }
];
// 处理缩放

editorSizeList.forEach((item) =>
{
  //  532为设计稿要求宽度
  const scale = 532 / item.navtiveHeight;

  item.width = (item.navtiveWidth * scale).toFixed(0);
  item.height = (item.navtiveHeight * scale).toFixed(0);
});
export default editorSizeList;
