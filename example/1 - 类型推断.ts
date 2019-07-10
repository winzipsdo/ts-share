// 隐式类型推断

export interface userInfo {
  phone: string;
  sms_code: string;
}

let userInfo: userInfo = {
  phone: '18811719709',
  sms_code: '668899',
};

// error TS2322: Type '1' is not assignable to type 'string'.
// userInfo.phone = 1;

// 在对象中使用
// const a: userInfo = { phone: 1 };

// 在数组中使用
// const a: userInfo[] = [{}];
