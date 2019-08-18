import '@tarojs/async-await';
import Taro, { Component, Config as TaroConfig } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import Index from './pages/index';
import dva from './utils/dva';
import storage from './utils/storage';
import models from './models';

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const dvaApp = dva.createApp({
  initialState: {},
  models: models
});

const stores = dvaApp.getStore();

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: TaroConfig = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    networkTimeout: {
      request: 10000,
      uploadFile: 10000
    }
  };

  private timer;
  private jumped = false;

  componentWillMount(): void {
    const host = 'https://mp.secrecoffee.com/app/pegasus-api-master/api';

    const interceptor = chain => {
      const requestParams = chain.requestParams;
      if (!/^(http|\/\/)/.test(requestParams.url)) {
        // console.log(store.backDoor.password);
        // if (store.backDoor.password === '1') {
        //   host = 'https://mp.secrecoffee.com/app/pegasus-api-master/api';
        // } else {
        //   host = 'https://mp.secrecoffee.com/app/pegasus-api-master/api-staging';
        // }
        requestParams.url = host + requestParams.url;
      }
      const token = storage.get('token');
      if (token) {
        if (!requestParams.header) {
          requestParams.header = {};
        }
        requestParams.header.Authorization = `Bearer ${token}`;
      }
      return chain.proceed(requestParams).then(res => {
        const {
          statusCode,
          data: { message = '网络请求失败' }
        } = res;
        if (statusCode === 401 || statusCode === 403) {
          clearTimeout(this.timer);
          this.timer = setTimeout(() => {
            this.jumped = false;
          }, 1000);
          if (this.jumped) {
            return;
          }
          this.jumped = true;
          Taro.navigateTo({
            url: `/pages/login/index`
          }).then(() =>
            Taro.showToast({
              title: '请登录',
              icon: 'none'
            })
          );
        }
        if (statusCode >= 400) {
          Taro.showToast({
            title: message,
            icon: 'none'
          });
          return Promise.reject(res);
        }
        return res;
      });
    };

    Taro.addInterceptor(interceptor);
  }

  componentDidMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={stores}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
