import { HTTP_REQUEST_URL, HEADER, TOKEN } from "@/config";
import { useAuthStore } from "@/store"

type RequestOptionsMethod = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
type RequestOptionsMethodAll = RequestOptionsMethod | Lowercase<RequestOptionsMethod>

function baseRequest(
  url: string,
  method: RequestOptionsMethod,
  data: any,
  { needAuth = false }: any,
) {
  const auth = useAuthStore()
  const Url = HTTP_REQUEST_URL
  let header = JSON.parse(JSON.stringify(HEADER))

  // needAuth判断接口是否需要登录，true需要，false不需要
  if (!auth.isLogin && needAuth) {
    return Promise.reject({
      msg:'未登录'
    })
  }

  return new Promise((resolve, reject) => {
    uni.showLoading({
      title: '加载中',
      mask: true,
    })
    uni.request({
      url: Url + url,
      method: method || 'GET',
      header: header,
      data: data || {},
      success: (res: any) => {
        console.log('res', res)
        uni.hideLoading()
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          reject(res.data.message || '系统错误')
        }
      },
      fail: (msg) => {
        uni.hideLoading()
        reject('请求失败')
      },
    })
  })
}

const requestOptions: RequestOptionsMethodAll[] = [
  'options',
  'get',
  'post',
  'put',
  'head',
  'delete',
  'trace',
  'connect',
]

type Methods = typeof requestOptions[number]
const request: { [key in Methods]?: Function } = {}

requestOptions.forEach((method) => {
  const m = method.toUpperCase as unknown as RequestOptionsMethod
  request[method] = (api:string, data:any,needAuth:boolean) => baseRequest(api, m, data, needAuth)
})

export { request }