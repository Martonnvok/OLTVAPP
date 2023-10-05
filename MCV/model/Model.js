import { oltasok, adatok, linkek } from "./adatok.js";
class Model {
  #oltasok = [];
  #adatok = [];
  #linkek = [];
  constructor() {
    this.#oltasok = oltasok;
    this.#adatok = adatok;
    this.#linkek = linkek;
    console.log(this.#adatok);
  }

  ujAdat(adat) {
    this.#adatok.push(adat);
    console.log(this.#adatok);
  }

  getOltas(index) {
    return this.#oltasok[index];
  }

  getOltasok() {
    return this.#oltasok;
  }

  getLinkek() {
    return this.#linkek;
  }

  getAdat(index) {
    return this.#adatok[index];
  }

  getAdatok() {
    return this.#adatok;
  }
}
export default Model;
