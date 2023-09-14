import Adat from "../adat.js";

class Megjelenit {
  #oltasok;
  #adatok;

  constructor(oltasok, adatok, szuloElem) {
    this.szuloElem = szuloElem;
    this.#oltasok = oltasok;
    this.#adatok = adatok;
    this.oltasok();
    this.kiir();
  }

  oltasok() {
    let txt = "";
    for (let i = 0; i < this.#oltasok.length; i++) {
      txt += "<span>" + this.#oltasok[i] + "</span>";
      txt += "<div class='adatok'></div>";
    }
    this.szuloElem.append(txt);
    this.gyerekElem = this.szuloElem.children(".adatok");
  }

  kiir() {

    this.#adatok.forEach((elem) => {
        new Adat(elem, this.gyerekElem);
      });
  }
}

export default Megjelenit;
