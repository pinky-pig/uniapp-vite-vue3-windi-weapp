// 微信小程序地图的相关类型
/** 后端返回的路由相关类型 */
declare namespace ApiRoute {
  /** 后端返回的路由数据类型 */
  interface MarkerType {
    id: number,
    latitude: number,
    longitude: number,
    iconPath: string,
    callout: object,
  }
}
