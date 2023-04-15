import { ApiModel } from "./api";

class App {
  api: ApiModel;
  static instance: any;
  constructor() {
    this.api = new ApiModel();

    if (typeof App.instance === "object") {
      return App.instance;
    }
    App.instance = this;
  }
}
const app = new App();

export default app;
