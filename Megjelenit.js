import Adat from "../adat.js";

class Megjelenit {
  #oltasok = [];
  #adatok = [];
  #linkek = [];
  szuloElem;

  constructor(oltasok, adatok, szuloElem, linkek) {
    this.szuloElem = szuloElem;
    this.#oltasok = oltasok; //tömb
    this.#adatok = adatok; //lista
    this.#linkek = linkek;
    this.oltasok();
    this.navigacio();
    this.kiir();
    
  }

  navigacio() {

    const HEADER = $("header");
    let txt = `<nav>`;
    txt += `<div class="collapse navbar-collapse" id="collapsibleNavbar">`;
    txt += `<ul class="navbar-nav">`;
    for (let i = 0; i < this.#linkek.length; i++) {
      txt += `<li class="nav-item">
      <a class="nav-link" href="#">${this.#linkek[i]}</a>
      </li>`;

    }
    txt += `</div>`
    txt += `</nav>`;

    HEADER.append(txt);

  }

  oltasok() {
    let txt = "";
    for (let i = 0; i < this.#oltasok.length; i++) {
      txt += "<br>"
      txt += "<span id='oltas' class='border border-1'>" + this.#oltasok[i] + "</span>";
      txt += "<div class='adat" + [i] + "'></div>";
    }
    this.szuloElem.append(txt);
  }

  kiir() {

    for (let i = 0; i < this.#adatok.length; i++) {
      this.gyerekElem = this.szuloElem.children(".adat" + [i] + "");
      new Adat(this.#adatok[i], this.gyerekElem)
    }


  }
}

export default Megjelenit;
