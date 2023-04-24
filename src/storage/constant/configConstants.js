// 后端值转选中
export const valueToCheckedMap = {
  0: false,
  1: true
};
// 后端值转选中
export const checkedToValueMap = {
  true: '1',
  false: '0'
};
//  遍历和赋值:默认和自定义Map
export const defaultAndConfigConstant = {
  default: {
    label: '默认',
    value: '1'
  },
  config: {
    label: '自定义',
    value: '2'
  }
};

// 遍历和赋值；对齐后端key值对应前端配置
//  value:采用flex布局,align:对应 text-align
export const alignMap = {
  1: {
    icon: 'align-left',
    value: 'flex-start',
    align: 'left',
    label: '左对齐'
  },
  2: {
    icon: 'align-center',
    value: 'center',
    align: 'center',
    label: '居中对齐'
  },
  3: {
    icon: 'align-right',
    value: 'flex-end',
    align: 'right',
    label: '右对齐'
  }
};

// 字体加粗
export const fontWeightMap = {
  0: '100',
  1: '900'
};
// 边框类型
export const borderStyleMap = {
  0: 'solid',
  1: 'dotted',
  2: 'dashed'
};
// 边框类型--标签组件
export const borderStyleLabelMap = {
  1: 'solid',
  // '1': 'dotted',
  2: 'dashed'
};
//  遍历和赋值；图片适配,后端key值对应前端配置
export const imageFitMap = {
  1: {
    label: '自动适配',
    value: 'cover'
  },
  2: {
    label: '等比缩放居中',
    value: 'contain'
  },
  3: {
    label: '拉伸填满',
    value: 'fill'
  }
};

export const imageFitConstant = {
  cover: '1',
  contain: '2',
  fill: '3'
};

// 遍历和赋值:弹窗关闭按钮位置,后端key值对应前
export const windowCloseImageFitMap = {
  1: {
    label: '左上角',
    value: '1'
  },
  2: {
    label: '右上角',
    value: '2'
  },
  3: {
    label: '最下方',
    value: '3'
  }
};

// 连接事件重定向
export const redirectConstant = {
  empty: {
    label: '无',
    value: '0'
  },
  // app: {
  // label:'应用',
  //
  //
  // value: '1'
  // },
  native: {
    label: '原生界面',
    value: '2'
  },
  h5: {
    label: 'H5链接',
    value: '3'
  },
  window: {
    label: '弹窗',
    value: '4'
  },
  page: {
    label: '页面',
    value: '5'
  }
};
// 行选项-列表
export const rowList = [
  {
    label: '1',
    value: '1'
  },
  {
    label: '2',
    value: '2'
  },
  {
    label: '3',
    value: '3'
  },
  {
    label: '4',
    value: '4'
  },
  {
    label: '5',
    value: '5'
  },
  {
    label: '无限',
    value: '6'
  }
];
// 列选项
export const columnList = [
  {
    label: '2',
    value: '2'
  },
  {
    label: '3',
    value: '3'
  },
  {
    label: '4',
    value: '4'
  },
  {
    label: '5',
    value: '5'
  }
];

//  分隔样式 对齐方式
export const splitAlignList = [
  {
    icon: 'align-left',
    value: '1',
    label: '左对齐'
  },
  {
    icon: 'align-center',
    value: '0',
    label: '居中对齐'
  },
  {
    icon: 'align-right',
    value: '2',
    label: '右对齐'
  }
];

// 分隔样式 对齐方式
export const splitAlignMap = {
  0: 'center',
  1: 'left',
  2: 'right'
};

//  网格／永道 显示类型,key仅前端对应样式布局
export const gridShowTypeList = {
  0: { type: 'show-column', img: require('@/assets/showType/show1.png') },
  1: { type: 'show-row', img: require('@/assets/showType/show2.png') },
  2: { type: 'show-row-reverse', img: require('@/assets/showType/show3.png') }
};
