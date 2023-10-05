import AdatView from "../view/AdatView.js"
import Megjelenit from "../view/Megjelenit.js"
import FormView from "../view/FormView.js";
import Model from "../model/Model.js";



class Controller {
  #tarolo
  #ujadat
  constructor(TAROLO, UJADAT) {
    this.#tarolo = TAROLO;
    this.#ujadat = UJADAT;
    const MODEL = new Model();
    new Megjelenit(MODEL.getOltasok(), MODEL.getAdatok(), this.#ujadat, MODEL.getLinkek());
    for (let index = 0; index < MODEL.getAdatok().length; index++) {
      new AdatView(index, MODEL.getOltas(index), MODEL.getAdat(index), this.#tarolo);
      new FormView(MODEL.getAdat(index), this.#ujadat);
      
    }


    $(window).on("ujAdatHozzaAdas", (event) => {
      MODEL.ujAdat(event.detail);
      console.log(MODEL.getList());
    });

  }
}

export default Controller;