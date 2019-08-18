// @ts-ignore
import Taro from '@tarojs/taro';

type userInfoData = {
  id: number;
  nickname: string;
  code: string;
  name: string;
  className: any; // 班级名称
  majorName: any; // 专业名称
  identityType: string;
  classId: number;
  phone: string;
  score: number;
  avatarUrl: any;
  isEnabled: boolean;
  state: number;
};

type Config = {
  [name: string]: string;
};

interface Storage {
  get: {
    (key: 'token'): string | undefined;
    (key: 'channelCode'): string | undefined;
    (key: 'channelCodeDate'): string | undefined;
    (key: 'openid'): string | undefined;
    (key: 'isDeliverUI'): boolean;
    (key: 'userInfo'): userInfoData | undefined;
    (key: 'refererId'): number | undefined;
    (key: 'refererDate'): number | undefined;
    (key: 'config'): Config | undefined;
    (key: 'tipDate'): string | undefined;
  };
  set: {
    (key: 'token', value: string);
    (key: 'channelCode', value: string);
    (key: 'channelCodeDate', value: string);
    (key: 'openid', value: string);
    (key: 'isDeliverUI', value: boolean);
    (key: 'userInfo', value: userInfoData);
    (key: 'refererId', value: number);
    (key: 'refererDate', value: string);
    (key: 'config', value: Config);
    (key: 'tipDate', value: string);
  };
  del: {
    (key: 'token');
    (key: 'userInfo');
    (key: 'config');
  };
  clear: () => void;
}

const storage: Storage = {
  get: key => Taro.getStorageSync(key),
  set: (key, value) => Taro.setStorageSync(key, value),
  del: key => Taro.removeStorageSync(key),
  clear: () => Taro.clearStorageSync()
};

export default storage;
