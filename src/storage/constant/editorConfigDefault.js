// 富文本编辑器配置
const editorConfig = {
  autoHeightEnabled: false,
  initialFrameHeight: 200,
  initialFrameWidth: '100%',
  UEDITOR_HOME_URL: '/static/UEditor/',
  serverUrl: '',
  toolbars: [
    'bold', // 加粗
    'italic', // 斜体
    'fontsize', // 字号
    'forecolor', //  字体颜色
    'backcolor', // 背景色
    'justifyleft', //  居左对齐
    'justifycenter', //  居中对齐
    'justifyright' // 居右对齐
    // 'emotion' // 表情
  ]
};

export default editorConfig;
