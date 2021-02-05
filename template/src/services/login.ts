import request from '@utils/request';

export function login(data: {
  username: string;
  password: string;
}): Promise<any> {
  // return request('/login', {
  //   method: 'POST',
  //   data,
  // });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ code: 0, msg: '成功', data: { username: 'w' } });
    }, 1000);
  });
}

export function logout(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ code: 0, msg: '成功' });
    }, 1000);
  });
}
