import Bejelentkezes from "../view/Bejelentkezes.js";
import Bmodell from "../model/Bmodell.js";
class Bcontroller{
    #bejelentkezes
    #bmodell

    constructor(bejelentkezes){
        this.#bejelentkezes = bejelentkezes;
        this.#bmodell = new Bmodell();
        this.#bejelentkezes = new Bejelentkezes(bejelentkezes, this.#bmodell.getFelhasznalok());
        
    }
    
}

export default Bcontroller;