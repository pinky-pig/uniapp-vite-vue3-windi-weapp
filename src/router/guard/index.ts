import { useAuthStore } from "@/store"

/**
 * 已登录、白名单不拦截
 * 否则，全都跳转到登录
 */
export function createRouterGuard() {

  const auth = useAuthStore()
  const whiteList = [
    '/pages/my/index',
  ]

  let interceptArr = ['navigateTo', 'switchTab']
  interceptArr.map(item => {

    uni.addInterceptor(item, {
      // tabbar页面跳转前进行拦截
      invoke(e) {
        // 使用 ?? 时，只有当值1为null或undefined时才返回值2；
        // 使用 || 时，值1会转换为布尔值判断，为true返回值1，false 返回值2
        const hasPermission = auth.isLogin || whiteList.includes(e.url)
        if (!hasPermission) {
          wx.showToast({
            title: '请重新登录',
            icon: 'none',
            duration: 2000
          })
          setTimeout(() => {
            uni.reLaunch({
              url: '/pages/my/index'
            })
          }, 500);
          return false
        }
        return true
      },
      success(e) {
        console.log(e)
      },
      fail(err){
        console.log(err)
      }
    })
  })

}