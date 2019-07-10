// 使用ts-node可以暂时逃离配置的困扰
// 直接进行ts的语法练习

// let payType: string = 'ali';
// payType = 1;

// let payType: 'ali' | 'wechat' | 'xes' = 'ali';

// 即使是字符串类型也可以提供输入建议
// payType = ''

// 可惜的是这种用法并不支持正则表达式
// https://github.com/Microsoft/TypeScript/issues/6579

// 需要使用 @types/node 依赖对require进行类型识别
// npm i -D @types/node
const something = require('../utils/0');

// 剩余选项推断
// payType = something(payType);
// if (payType === 'ali') {
//   console.log(payType);
// } else if (payType === 'wechat') {
//   console.log(payType);
// }

enum PayType {
  ALI = 'ali',
  WECHAT = 'wechat',
  XES = 'xes',
}

// 只接受使用枚举类型进行赋值
// let payType2: PayType = 'ali';
// console.log(payType2);

// 推荐阅读
// ----------
// 旧项目TypeScript改造问题与解决方案记 https://segmentfault.com/a/1190000015747038
