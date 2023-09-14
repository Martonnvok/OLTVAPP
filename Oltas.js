class Oltas {
  #elem;

  constructor(elem, szuloElem) {
    this.#elem = elem;
    this.szuloElem = szuloElem;
    let txt = "<span>" + this.#elem + "</span>";
    txt += "<div class='adatok'></div>";
    this.szuloElem.append(txt);
    this.gyerekElem = this.szuloElem.children(".adatok");
  }
}

export default Oltas;
