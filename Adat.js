class Adat {
  #elem;
  #szuloElem;
  constructor(elem, szuloElem) {
    this.#elem = elem;
    this.#szuloElem = szuloElem;
    this.kiir();
  }
  kiir() {
    let txt = "<ul class='list-group'>";
    for (const key in this.#elem) {
      txt += "<il class='list-group-item'>" + key +": "+ this.#elem[key] + "</il>";
    }
    txt += "</ul>",
    this.#szuloElem.append(txt);
  }
}

export default Adat;
