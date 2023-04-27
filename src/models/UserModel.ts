class UserModel {
  uid: string;
  username: string;
  name: string;
  email: string;
  description: string;
  photo: string;
  thumbnail: string;
  token?: string;
  password?: string;
  constructor(data: any = null) {
    this.uid = data?.uid || '';
    this.username = data?.username || '';
    this.name = data?.name || '';
    this.email = data?.email || '';
    this.photo = data?.photo || '';
    this.thumbnail = data?.thumbnail || '';
    this.description = data?.description || '';
    this.token = data?.token || '';
    this.password = data?.password || '';
  }
  public get isEmpty(): boolean {
    return this.uid === '';
  }
}
export default UserModel;
