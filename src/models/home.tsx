// import { queryDownLoadRank } from '../services/home';

export default {
  namespace: 'home',
  state: {
    count: 0
  },
  effects: {
    // eslint-disable-next-line no-unused-vars
    * add({ payload }, { put }) {
      // yield call(queryDownLoadRank, payload);
      yield put({
        type: 'saveData',
        payload: {
          ...payload
        }
      })
    },
    * asyncAdd({ payload }, { put, select }) {
      const { count } = yield select(state => state.home);
      yield put({
        type: 'home/add',
        payload: {
          count: payload.count + count
        }
      });
    }
  },
  reducers: {
    saveData(state, { payload }) {
      console.log('save', payload);
      return {
        ...state,
        count: payload.count
      }
    }
  },
  subscriptions: {}
}
