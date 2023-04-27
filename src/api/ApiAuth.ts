import getApi, { onUploadProgress } from './api';

export const getAuthCurrentToken = () => {};

export const setAuthCurrentToken = (token: string) => {};

export default class ApiAuth {
  constructor() {}
  async register(user: UserModel) {
    return getApi()
      .post('/auth/register', user)
      .then((res) => {
        return new UserModel(res.data.data);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }
  async updateMe(uid: string, data: any) {
    return getApi()
      .put('/users/updateme', {
        uid,
        ...data,
      })
      .then((res) => {
        console.log(res.data);
        return new UserModel(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  }
  async updateProfilePic(
    uid: string,
    file: any,
    onProgress: (val: number) => void
  ): Promise<UserModel> {
    const formData = new FormData();
    formData.append('uid', uid);
    formData.append('file', file);

    return getApi({ appjson: false })
      .put('/users/updateme/pic', formData, {
        onUploadProgress: onUploadProgress((val) => onProgress(val)),
      })
      .then((res) => {
        console.log(res.data);
        onProgress(100);
        return res.data.data;
      })
      .catch((err) => {
        console.log(err);
        onProgress(0);
        return null;
      });
  }
}
