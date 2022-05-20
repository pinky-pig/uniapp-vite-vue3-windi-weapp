type UserType = {
  userId:string,
  avatarUrl:string,
  nickName:string,
  status:string,
  userMobile:string,
}
const userInfo: UserType = {
  userId:"1",
  avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ8SiagBMUuLZ7USibVCmnJBvy87ib8gT8gl1wrCwwZRVDsv9a6t4lbGLHcoiacKDxjvgw0v374xE3UkQ/132',
  nickName: 'Man',
  status: 'Lv1',
  userMobile: '1382550699x',
};

export const getUserInfo = () => ({
  userInfo,
});
