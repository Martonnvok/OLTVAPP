class Adat {
  #elem = [];
  #szuloElem;

  constructor(elem, szuloElem) {
    this.#elem = elem;
    console.log(this.#elem)
    this.#szuloElem = szuloElem;
    this.kiir();
  }

  kiir() {
    let txt = ""

    for (const key in this.#elem) {
      txt += "<span id='"+key+"'class='border border-1'>" +key+": "+this.#elem[key] + "</span>";
    }
    this.#szuloElem.append(txt);
  }

  ujAdat(adat) {
    this.#elem.push(adat);
  }

  getList() {
    return this.#elem
  }
}

export default Adat;