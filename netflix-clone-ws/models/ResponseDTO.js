export default class ResponseDTO {
  constructor() {}

  success(res) {
    this.success = true;
    this.message = null;
    this.response = res;
  }

  fail(msg) {
    this.success = false;
    this.message = msg;
    this.response = null;
  }
}
