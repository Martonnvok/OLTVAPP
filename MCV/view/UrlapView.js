import TextUrlapElem from "./Rview/TextUrlapElem.js";
import NumberUrlapElem from "./Rview/NumberUrlapElem.js";
import EmailUrlapElem from "./Rview/EmailUrlapElem.js";
import TelUrlapElem from "./Rview/TelUrlapElem.js";

class UrlapView {
  #leiro = {};
  #urlapElemLista = [];
  #urlapNumberLista = [];
  #osszesElemValidE = true;
  #urlapAdat = {};
  constructor(szuloElem, leiro) {
    this.szuloElem = szuloElem;
    this.#leiro = leiro;
    this.szuloElem.append("<form>");
    this.formElem = this.szuloElem.children("form");

    this.#urlapOsszerak();
    this.submitElem = $("#submit");
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#osszesElemValidE = true;
      this.#urlapElemLista.forEach(elem => {
        console.log(elem)
        this.#osszesElemValidE = this.#osszesElemValidE && elem.valid;
      })
      if (this.#osszesElemValidE) {
        this.#urlapElemLista.forEach((elem) => {
          this.#urlapAdat[elem.key] = elem.value;
        })
        console.log("Valid az űrlap")
      } else {
        console.log("Nem valid az űrlap");
      }
      console.log(this.#urlapAdat)
    });
  }

  get urlapAdat() {
    return this.#urlapAdat;
  }

  #urlapOsszerak() {
    for (const key in this.#leiro) {
      switch (this.#leiro[key].tipus) {
        case "text":
          this.#urlapElemLista.push(new TextUrlapElem(key, this.#leiro[key], this.formElem))
          break;
        case "number":
          this.#urlapElemLista.push(new NumberUrlapElem(key, this.#leiro[key], this.formElem));
          break;
        case "email":
          this.#urlapElemLista.push(new EmailUrlapElem(key, this.#leiro[key], this.formElem));
          break;
        case "phone":
          this.#urlapElemLista.push(new TelUrlapElem(key, this.#leiro[key], this.formElem));
          break;
        default:
      }
    }
    let txt = "<input type='submit' id='submit' value='OK'>";
    this.formElem.append(txt);
  }

}
export default UrlapView;