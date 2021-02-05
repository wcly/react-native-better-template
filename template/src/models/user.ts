import { login } from '@services/login';

export type UserModelState = {
  username: string;
};

const defaultState: UserModelState = {
  username: '',
};

export default {
  namespace: 'user',
  state: defaultState,
  reducers: {
    setUserName(state: any, { payload }: any) {
      return {
        ...state,
        username: payload,
      };
    },
    resetState() {
      return defaultState;
    },
  },
  effects: {
    *login({ payload }: any, { put, call }: any) {
      const { code, data } = yield call(login, payload);
      if (code === 0) {
        yield put({
          type: 'setUserName',
          payload: data.username,
        });
      }
    },
    *logout(_: any, { put, call }: any) {
      const { code, data } = yield call(login);
      if (code === 0) {
        yield put({
          type: 'resetState',
        });
      }
    },
  },
};
