import Adat from "./Adat.js";

class Megjelenit {
  #oltasok = [];
  #adatok = [];
  #linkek = [];
  szuloElem;

  constructor(oltasok, adatok, szuloElem, linkek) {
    this.szuloElem = szuloElem;

    //Formhoz szükséges kódok
    this.szuloElem.html("<form>");
    this.formElem = this.szuloElem.children("form");
    this.submitElem = this.formElem.children("div").children("#submit");
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#adatGyujt();
      this.#kattintTrigger("ujAdatHozzaAdas");
    });

    this.#oltasok = oltasok; //tömb
    this.#adatok = adatok; //lista
    this.#linkek = linkek;

    this.oltasok();
    this.navigacio();
    this.kiir();
    this.#formKezeles();
  }

  #formKezeles(){
    let txt = "<div class='form-group'>";
    txt += "<input type='text' id='datum' name='datum'>";
    txt += "<input type='text' id='tipus' name='tipus'>";
    txt += "<input type='text' id='informacio' name='informacio'>";
    txt += "<input type='text' id='emlekezteto' name='emlekezteto'>";
    txt += "<input type='text' id='cim' name='cim'>";
    txt += "<button id=submit type='button'>Kész</button>";
    txt += "</div>";
    this.formElem.append(txt);
  }

  #adatGyujt(){

  }

  #kattintTrigger(esemenyNev){
    const E = new CustomEvent(esemenyNev, { detail: {...this.#adatok} });
    window.dispatchEvent(E);
  }

  //navigáció
  navigacio() {
    const HEADER = $("header");
    let txt = `<nav class="navbar navbar-expand-sm bg-info navbar-light">`;
    txt += `<div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler megjelenit" type="button" data-bs-toggle="collapse"
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
    txt += `</div>`;
    txt += `</div>`;
    txt += ` <div class="input-group">
    <div class="kereso-container">
    <input type="text" class="form-control" placeholder="Search" id="searchInput">
    <div class="input-group-append">
        <button class="btn btn-primary" id = "gombM"><i class="fas fa-search"></i></button>
    </div>
    </div>
</div>`;
    txt += `</nav>`;

    HEADER.append(txt);

    this.kattintas();
    this.keresoreKattint();
  }

  //Tábla

  oltasok() {
    let txt = "";
    for (let i = 0; i < this.#oltasok.length; i++) {
      txt += "<br>";
      txt +=
        "<span id='oltas" +
        [i] +
        "' class='border border-1'>" +
        this.#oltasok[i] +
        "</span>";
      txt += "<div class='adat" + [i] + "' style='display: none';></div>";
    }
    this.szuloElem.append(txt);
  }

  kiir() {
    for (let i = 0; i < this.#adatok.length; i++) {
      this.gyerekElem = this.szuloElem.children(".adat" + [i] + "");
      new Adat(this.#adatok[i], this.gyerekElem);
    }
  }

  //kattintások
  kattintas() {
    for (let i = 0; i < this.#oltasok.length; i++) {
      $("#oltas" + [i] + "").on("click", () => {
        if ($(".adat" + [i] + "").is(":visible")) {
          $(".adat" + [i] + "").slideUp();
          setTimeout(() => {
            $("#oltas" + [i] + "").css("border-bottom-left-radius", "30px");
            $("#oltas" + [i] + "").css("border-bottom-right-radius", "30px");
          },400);
        } else {
          $(".adat" + [i] + "").slideDown();
          $("#oltas" + [i] + "").css("border-bottom-left-radius", "0px");
          $("#oltas" + [i] + "").css("border-bottom-right-radius", "0px");
        }
      });
    }
  }

  keresoreKattint() {
    let searchInput = $("#searchInput");
    searchInput.hide();
    $("#gombM").click(function () {
      if (searchInput.is(":visible")) {
        searchInput.hide();
      } else {
        searchInput.show();
      }
    });
  }
}

export default Megjelenit;
