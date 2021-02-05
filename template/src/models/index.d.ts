import { UserModelState } from './user';

type Loading = {
  global: boolean;
  models: {
    user: boolean;
  };
};

export type DefaultRootState = {
  user: UserModelState;
  loading: Loading;
};
