// can't read property 'a' of undefined
// 明明是字符串却调用了数组的方法？
// 在变量声明处与使用处来回查看
// 上线了才知道有些极端情况没有考虑到
// 写的代码很骚 但可读性很差

// ts => ts-node
// require => @types/node
// import => @babel/register

// 强兵利刃

// 为大规模JS应用而生

// vscode就是拿ts写的

// TypeScript体系调研报告 https://juejin.im/post/59c46bc86fb9a00a4636f939
// 基于现有仓库进行改造 https://github.com/Microsoft/TypeScript-Vue-Starter#typescript-vue-starter

// 使用ts-node可以暂时逃离配置的困扰
// 直接进行ts的语法练习

// let payType: string = 'ali';
// payType = 1;

let payType: 'ali' | 'wechat' | 'xes' = 'ali';
// let payType: 'len:1' | 'len:2' | 'xes' = 'ali';

// 即使是字符串类型也可以提供输入建议
// payType = ''

// 可惜的是这种用法并不支持正则表达式
// https://github.com/Microsoft/TypeScript/issues/6579

// 需要使用 @types/node 依赖对require进行类型识别
// npm i -D @types/node
const noop = require('../utils/0');

// 剩余选项推断
// payType = noop(payType);
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
// let payType2: PayType = PayType.ALI;
// console.log(payType2);

// 推荐阅读
// ----------
// 旧项目TypeScript改造问题与解决方案记 https://segmentfault.com/a/1190000015747038
// vue-property-decorator使用指南 https://juejin.im/post/5c173a84f265da610e7ffe44
// 使用 TypeScript 装饰器装饰你的代码 https://juejin.im/post/5d15e13fe51d45108f254242#heading-8
