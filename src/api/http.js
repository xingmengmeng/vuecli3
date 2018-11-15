/**
 * @file 扩展ajax请求
 **/
import axios from 'axios'
import qs from 'qs'
//import router from '@/router/index'

const service = axios.create({
  // withCredentials: true, 此两行为限制请求时长，暂时不需要
  // timeout: 6000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // console.log('before.request', config)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  res => {
    if (res.data.code == 200) {

    } else if (res.data.code == 203) {
      localStorage.clear()
      //router.push('/')
      return Promise.reject(res.data.msg)
    } 
    return res
  },
  error => {
    return Promise.reject(error)// error.response.data
  }
)

export default {
  post(url, data = {}) {
    return service({
      method: 'post',
      url,
      data: qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  },
  postJson(url, data = {}) {
    return service({
      method: 'post',
      url,
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  get(url, data = {}) {
    return service({
      method: 'get',
      url,
      params: data
    })
  },
  delete(url, data = {}) {
    return service({
      method: 'delete',
      url,
      params: data
    })
  }
}
