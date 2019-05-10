import {fetchUser , fetchClass} from '@/services/example'

export default {
  // 子模块的命名空间
  namespace: 'example',

  // 子模块的状态
  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  // 异步改变
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      let data = yield call(fetchUser);
      let list = yield call(fetchClass);
      // console.log('list...', list);
      yield put({ type: 'save', payload: {data: data.data} });
      yield put({ type: 'getList', payload: {list: list.classList}})
    },
  },

  // 同步改变，这里是更改state的唯一地方
  reducers: {
    save(state, action) {
      // console.log('action...', action);
      return { ...state, ...action.payload };
    },
    getList(state,action) {
      console.log('getList-act',action);
      return { ...state, ...action.payload };
    }
  },

};
