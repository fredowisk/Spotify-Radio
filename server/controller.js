import { Service } from "./service.js";

//apenas o controller pode ter acesso aos services.
export class Controller {
  constructor() {
    this.service = new Service();
  }

  async getFileStream(filename) {
    return this.service.getFileStream(filename);
  }
}
