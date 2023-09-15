class Adat {
  #elem;
  szuloElem;
  #adatok;
  #oltas;
  
  constructor(elem, adatok, szuloElem, oltas) {
    this.#elem = elem;
    this.szuloElem = szuloElem;
    this.#adatok = adatok;
    this.#oltas = oltas;
    this.kiir();
  }
  
  kiir() {
    const AKTUALISOLTAS = this.#adatok.filter(adat => adat.tipus === this.#oltas);
    let txt = "<ul class='list-group'>";
    
    for (const key of AKTUALISOLTAS) {
      txt += "<li class='list-group-item'>" + key.datum + ": " + key.informacio + " " + key.emlekezteto + "</li>";
    }
    
    txt += "</ul>";
    this.szuloElem.append(txt);
  }
}

export default Adat;