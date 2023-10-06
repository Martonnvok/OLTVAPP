import { oltasok, kiirtOltasok, adatok, linkek } from "./adatok.js";
class Model {
  #oltasok = [];
  #kiirtOltasok = [];
  #adatok = [];
  #linkek = [];

  constructor() {
    this.#oltasok = oltasok;
    this.#kiirtOltasok = kiirtOltasok;
    this.#adatok = adatok;
    this.#linkek = linkek;

  }

  ujAdat(adat) {
    this.#adatok.push(adat);
  }

  ujkiirtOltas(adat){
    this.#kiirtOltasok.push(adat);
  }

  getKiirtOltasok(){
    return this.#kiirtOltasok;
  }

  getKiirtOltas(index){
    return this.#kiirtOltasok[index];
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
