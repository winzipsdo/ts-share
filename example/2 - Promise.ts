// const axios = require('axios');
import axios from 'axios';

// 能不能在不使用 @babel/register 或者 webpack/gulp 等构建工具的情况下使用 ts ?
// 我个人的观点是不可以的

// axios.get('https://growth.xueersi.com/api/ac/summerCourse/getCoursePrice').then(({ data }: { data: any }) => {
//   console.log(data);
// });

// 拦截器response改造
axios.interceptors.response.use((res) => res.data);

// axios.get('https://growth.xueersi.com/order/courseinfo?courseId=67051').then((data) => {
//   console.log(data);
// });

// 模块化声明
// declare module 'axios' {
//   interface AxiosStatic {
//     cancel: any;
//   }
// }

// 可以进行自定义的赋值
// axios.cancel = 1;

// function apiGetCourseInfoAny(): Promise<any> {
//   return axios.get('https://growth.xueersi.com/order/courseinfo?courseId=67051');
// }

// apiGetCourseInfoAny().then((res) => {
//   console.log(res);
// });

interface GrowthResponse {
  stat: number;
  code: number;
  message: string;
  data: any;
}

function apiGetCourseInfoTyped0(): Promise<GrowthResponse> {
  return axios.get('https://growth.xueersi.com/order/courseinfo?courseId=67051');
}

apiGetCourseInfoTyped0().then((res) => {
  console.log(res);
});

interface CourseInfoResponse extends GrowthResponse {
  data: {
    subjectName: string;
    grade_ids: string[];
  };
}

function apiGetCourseInfoTyped1(): Promise<CourseInfoResponse> {
  return axios.get('https://growth.xueersi.com/order/courseinfo?courseId=67051');
}

apiGetCourseInfoTyped1().then((res) => {
  console.log(res.data.grade_ids);
});
