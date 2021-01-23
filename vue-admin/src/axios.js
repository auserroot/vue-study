import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://linweiqin.cn:8001',
});

// 添加响应的拦截器
instance.interceptors.response.use(function (response) {
    // response 响应的所有内容
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });
  
export default instance;