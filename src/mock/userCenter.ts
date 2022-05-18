type UserType = {
  avatarUrl:string,
  nickName:string,
  memberLevelVO:string,
  userMobile:string,
}
const userInfo: UserType = {
  avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ8SiagBMUuLZ7USibVCmnJBvy87ib8gT8gl1wrCwwZRVDsv9a6t4lbGLHcoiacKDxjvgw0v374xE3UkQ/132',
  nickName: 'Man',
  memberLevelVO: 'Lv1',
  userMobile: '1382550699x',
};

export const getUserInfo = () => ({
  userInfo,
});
