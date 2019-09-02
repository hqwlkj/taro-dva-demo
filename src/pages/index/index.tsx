// eslint-disable-next-line no-unused-vars
import { ComponentClass } from 'react';
import Taro, { Component, Config as TaroConfig } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.less'


type PageStateProps = {
  home: {
    count: number
  }
}


type PageOwnProps = {}

type IProps = PageStateProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(({ home, loading }) => ({
  ...home,
  ...loading
}))
class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: TaroConfig = {
    navigationBarTitleText: '首页'
  };

  componentWillMount() {
    // @ts-ignore
    const { home, dispatch } = this.props;
    console.log('home', home);
    dispatch({
      type: 'home/add',
      payload: {
        count: 5
      }
    })
  }

  componentDidMount() {
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  add = () => {
    // @ts-ignore
    const { dispatch, count } = this.props;
    dispatch({
      type: 'home/add',
      payload: {
        count: count + 1
      }
    })
  }

  dec = () => {
    // @ts-ignore
    const { dispatch, count } = this.props;
    dispatch({
      type: 'home/dec',
      payload: {
        count: count - 1
      }
    })
  }

  asyncAdd = () => {
    console.log('asyncAdd');
    // @ts-ignore
    const { dispatch } = this.props;
    setTimeout(() => {
      dispatch({
        type: 'home/asyncAdd',
        payload: {
          count: 1
        }
      })
    }, 2000)
  };

  render() {
    // @ts-ignore
    const { count } = this.props;
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.add}>+</Button>
        <Button className='dec_btn' onClick={this.dec}>-</Button>
        <Button className='dec_btn' onClick={this.asyncAdd}>async</Button>
        <View><Text>{count}</Text></View>
        <Text>Hello world!</Text>
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps>;
