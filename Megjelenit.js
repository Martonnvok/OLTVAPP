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
    <input type="text" class="form-control" placeholder="Search" id="searchInput">
    <div class="input-group-append">
        <button class="btn btn-primary" id = "gombM"><i class="fas fa-search"></i></button>
    </div>
</div>`;
    txt += `</nav>`;

    HEADER.append(txt);

    this.kattintas();
    this.keresoreKattint();
  }

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
