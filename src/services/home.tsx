import Taro from '@tarojs/taro';

export async function queryDownLoadRank(params: any) {
  console.log('params', params);
  return Taro.request({
    url: `/api/admin/export/error_rank`,
    method: "GET"
  });
}
