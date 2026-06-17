import ErroBase from "./ErroBase.js";

export default class ErroConflito extends ErroBase {
  constructor(message){
    super(message, 409);
  }
}
