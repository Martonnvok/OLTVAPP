import Adat from "../Adat.js";

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
    let txt = `<nav class="navbar navbar-expand-sm bg-dark navbar-dark">`;
    txt += `<div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>`;
    txt += `<div class="collapse navbar-collapse" id="collapsibleNavbar">`;
    txt += `<ul class="navbar-nav">`;
    for (let i = 0; i < this.#linkek.length; i++) {
      txt += `<li class="nav-item">`;
      txt += `<a class="nav-link" href="#">${this.#linkek[i]}</a>`;
      txt += `</li>`;

    }
    txt += `</ul>`;
    txt += `</div>`
    txt += `</div>`
    txt += ` <div class="input-group">
    <input type="text" class="form-control meret" placeholder="Search" id="searchInput">
    <div class="input-group-append">
        <button class="btn btn-primary" id = "gombM"><i class="fas fa-search"></i></button>
    </div>
</div>`;
    txt += `</nav>`;

    HEADER.append(txt);


    this.kattintas();

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

  kattintas(){
    $("#oltas").on("click",() =>{
      console.log("Hallo");
      $("#adatbazis").show();
    })
  }
}

export default Megjelenit;
