import AdatView from "../view/AdatView.js"
import Megjelenit from "../view/NavView.js"
import FormView from "../view/FormView.js";
import Model from "../model/Model.js";



class Controller {
  #tarolo
  #ujadat
  #FORMVIEW;
  #ADATVIEW;
  constructor(TAROLO, UJADAT) {
    this.#tarolo = TAROLO;
    this.#ujadat = UJADAT;
    const MODEL = new Model();
    new Megjelenit(MODEL.getOltasok(), MODEL.getAdatok(), this.#ujadat, MODEL.getLinkek());
    for (let index = 0; index < MODEL.getAdatok().length; index++) {
      this.#ADATVIEW = new AdatView(index, MODEL.getKiirtOltas(index), MODEL.getAdat(index), this.#tarolo);
      this.#FORMVIEW = new FormView({dátum: "", tipus: "", információ: "", emlékeztető: ""}, MODEL.getOltasok(), this.#ujadat);
    }


    $(window).on("ujAdatHozzaAdas", (event) => {
      
      MODEL.ujAdat(event.detail);
      MODEL.ujkiirtOltas(this.#FORMVIEW.getMentettOlt());
      this.#tarolo.empty();
      for (let index = 0; index < MODEL.getAdatok().length; index++) {
        new AdatView(index, MODEL.getKiirtOltas(index), MODEL.getAdat(index), this.#tarolo);
      }
    });

  }
}

export default Controller;