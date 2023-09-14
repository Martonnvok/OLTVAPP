import Oltas from "../Oltas.js"

class Megjelenit{
    #oltasok;
    #adatok;

    constructor(oltasok, adatok, szuloElem){
        this.#oltasok = oltasok;
        this.#adatok = adatok;


        this.kiir(szuloElem);
    }

    kiir(szuloElem){
        this.#oltasok.forEach((elem) =>{
            new Oltas(elem, szuloElem);
        })
        this.#adatok.forEach((elem) =>{
            new Adat(elem, this.gyerekElem)
        })
    }

}

export default Megjelenit;