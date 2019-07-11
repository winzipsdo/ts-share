import Vue from 'vue';

// Vue CLI 中单文件组件的默认写法
// const root = {
//   data() {
//     return {
//       attrA: 1,
//       attrB: '2',
//     };
//   },
// };

// root.attrA = '1';

// Vue构造函数自带类型推导
// const root = new Vue({
//   data() {
//     return {
//       attrA: 1,
//       attrB: '2',
//     };
//   },
// });

// root.attrA;

import { userInfo } from '@/1 - 类型推断';

// extend函数附带类型推导
const component = Vue.extend({
  props: {
    propA: {
      type: Number,
      default: () => 1,
    },
    userInfo: {
      type: Object as () => userInfo,
      default() {
        return {
          phone: '153****0897',
          sms_code: '123123',
        };
      },
    },
  },
  data() {
    return {
      attrA: 1,
      attrB: '2',
    };
  },
  created() {
    this.attrA;
    this.propA;
    // this.userInfo.
    // this.userInfo. = 1
  },
});
