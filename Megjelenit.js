import Adat from "../adat.js";

class Megjelenit {
  #oltasok;
  #adatok;
  szuloElem;

  constructor(oltasok, adatok, szuloElem) {
    this.szuloElem = szuloElem;
    this.#oltasok = oltasok; //tömb
    this.#adatok = adatok; //lista
    this.oltasok();
    this.kiir();
  }

  oltasok() {
    let txt = "";
    for (let i = 0; i < this.#oltasok.length; i++) {
      txt += "<br>"
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
