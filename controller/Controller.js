import Adat from "../view/Adat.js"
import Megjelenit from "../view/Megjelenit.js"
import FormView from "../view/FormView.js";
import FormModel from "../model/Model.js";


class Controller {
  adat = [];
  constructor(TAROLO, UJADAT) {
    const MODEL = new FormModel();
    new Megjelenit(MODEL.getOltasok(), MODEL.getAdatok(), UJADAT, MODEL.getLinkek());
    for (let index = 0; index < MODEL.getAdatok().length; index++) {
      new Adat(MODEL.getAdat(index), TAROLO);
      new FormView(MODEL.getAdat(index), UJADAT);
      
    }


    $(window).on("ujAdatHozzaAdas", (event) => {
      MODEL.ujAdat(event.detail);
      console.log(MODEL.getList());
    });
  }
}

export default Controller;