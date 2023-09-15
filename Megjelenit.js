import Adat from "../adat.js";

class Megjelenit {
  #oltasok = [];
  #adatok = [];
  szuloElem;

  constructor(oltasok, adatok, szuloElem) {
    this.szuloElem = szuloElem;
    this.#oltasok = oltasok; //tömb
    this.#adatok = adatok; //lista
    this.oltasok();
    this.kiir();
    this.kattintas();
  }

  oltasok() {
    let txt = "";
    for (let i = 0; i < this.#oltasok.length; i++) {
      txt += "<br>"
      txt += "<span id='oltas' class='border border-1'>" + this.#oltasok[i] + "</span>";
      txt += "<div class='adat"+[i]+"'></div>";
    }
    this.szuloElem.append(txt);
  }

  kiir() {
    
    for (let i = 0; i < this.#adatok.length; i++) {
      this.gyerekElem = this.szuloElem.children(".adat"+[i]+"");
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
