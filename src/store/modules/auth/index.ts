import { defineStore } from 'pinia'
import { getUserInfo } from '@/mock/userCenter'
interface AuthState {
  /** 用户信息 */
  userInfo: Auth.UserInfo;
  /** 用户token */
  token: string;
  /** 登录的加载状态 */
  loginLoading: boolean;
}
export const useAuthStore = defineStore({
  id: 'AuthState',
  state: (): AuthState => ({
    userInfo: {
      userId: '',
      /** 用户头像 */
      avatarUrl: '',
      /** 用户名 */
      nickName: '',
      /** 用户角色类型 */
      status: '',
      /** 用户手机号 */
      userMobile:'',
    },
    token: '',
    loginLoading: false,
  }),
  getters: {
    isLogin: (state) => {
      return Boolean(state.token)
    }
  },
  actions: {
    resetAuthStore() {
      this.$reset()
    },
    /**
     * 微信登录。后端返回的token存入
     * @param openId - 微信登录的id
     */
    simpleLogin(userInfo: any) {
      Object.assign(this ,{ userInfo , token: 'true'})
    },
  },

})