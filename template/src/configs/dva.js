import { create } from 'dva-core';
import userModel from '@models/user.ts';
import { Provider } from 'react-redux';
import createLoading from 'dva-loading';

const models = [userModel];

const app = create({
  onError(err) {
    console.log(err);
  },
});

models.forEach((model) => {
  app.model(model);
});

app.use(createLoading());

app.start();

const store = app._store;

export { store, Provider };
export default app;
