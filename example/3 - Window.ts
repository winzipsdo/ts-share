// 类型“Window”上不存在属性“xes”
// window.xes = 1;

// any 大法
// (window as any).xes = 1;

// 在使用JSX时不推荐使用
// (<any>window).xes = 1;

// 使用全局扩大的声明
// Node环境中是没有 window 对象的
// interface global extends Window {
//   xes: number;
// }
// declare var global: global;
