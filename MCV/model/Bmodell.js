import { BELEPES } from "./adatok.js";
class Bmodell {
  #belepes=[]
  constructor(){
    this.#belepes=BELEPES;

  }
  getFelhasznalok() {
    return {...this.#belepes}
  }

}
export default Bmodell;