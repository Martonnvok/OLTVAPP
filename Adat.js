class Adat {
  #elem = [];
  #szuloElem;
  
  constructor(elem, szuloElem) {
    this.#elem = elem;
    this.#szuloElem = szuloElem;
    this.kiir();
  }
  
  kiir() {
    let txt = ""
    for (const key in this.#elem) {
      txt += "<span id='adatbazis'class='border border-1' style='display:none'>" +key+": "+this.#elem[key] + "</span>";
    }
    this.#szuloElem.append(txt);
  }
}

export default Adat;