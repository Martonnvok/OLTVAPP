import {oltasok, adatok, linkek} from "./adatok.js";
class FormModel {
    #oltasok = [];
    #adatok = [];
    #linkek = []
    constructor() {
      this.#oltasok = oltasok;
      this.#adatok = adatok;
      this.#linkek = linkek;
    }
  /*
    ujAdat(adat) {
      this.#list.push(adat);
    }
    */

    getOltas(index){
      return this.#oltasok[index];
    }

    getOltasok(){
      return this.#oltasok;
    }

    getLinkek(){
      return this.#linkek;
    }

    getAdat(index){
      return this.#adatok[index]
    }

    getAdatok(){
      return this.#adatok
    }
  }
  export default FormModel;