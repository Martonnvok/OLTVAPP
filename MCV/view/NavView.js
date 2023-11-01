import Adat from "./AdatView.js";

class Megjelenit {
  #oltasok = [];
  #adatok = [];
  #linkek = [];
  szuloElem;
  searchButton;

  constructor(oltasok, adatok, szuloElem, linkek) {
    this.szuloElem = szuloElem;
    this.#oltasok = oltasok; //tömb
    this.#adatok = adatok; //lista
    this.#linkek = linkek;
    console.log(this.#linkek);
    this.navigacio();
    this.kattintas();
    this.keresoreKattint();
  }



  //navigáció
  navigacio() {
    const divElem = $(".linkek");
    divElem.append(`<ul class="navbar-nav"></ul>`);
    const ulElem = divElem.children("ul");
    let txt = "";
    for (let i = 0; i < 4; i++) {
      txt += `<li class="nav-item">`;
      txt += `<a class="nav-link" id =${this.#linkek.name[i]} href="${this.#linkek.link[i]}">${this.#linkek.name[i]}</a>`;
      txt += `</li>`;
    }
    ulElem.append(txt);
  }

  //Tábla

  //kattintások
  kattintas() {
    for (let i = 0; i < this.#oltasok.length; i++) {
      $("#oltas" + [i] + "").on("click", () => {
        if ($(".adat" + [i] + "").is(":visible")) {
          $(".adat" + [i] + "").slideUp();
          setTimeout(() => {
            $("#oltas" + [i] + "").css("border-bottom-left-radius", "30px");
            $("#oltas" + [i] + "").css("border-bottom-right-radius", "30px");
          }, 400);
        } else {
          $(".adat" + [i] + "").slideDown();
          $("#oltas" + [i] + "").css("border-bottom-left-radius", "0px");
          $("#oltas" + [i] + "").css("border-bottom-right-radius", "0px");
        }
      });
    }
  }

  keresoreKattint() {
    const divElem = $(".kereso-container").children(".input-group-append");
    this.searchButton = $(".input-group-append");
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