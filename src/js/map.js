
export default class ErrorRepository {
  constructor() {
    this.codes = new Map();
  }
  
  addError(code, description) {
    this.codes.set(code, description);
  }

  translate(code) {
    if(!this.codes.has(code)){
      return 'Unknown error';
    }
   return this.codes.get(code);
  }
}
