class FormView {
    #adat = [];

    constructor(adat, szuloElem) {
        //Formhoz szükséges kódok
        this.#adat = adat;
        this.szuloElem = szuloElem;
        this.szuloElem.html("<form>");
        this.formElem = this.szuloElem.children("form");
        this.submitElem = this.formElem.children("div").children("#submit");
        this.#formKezeles();
        this.submitElem.on("click", (event) => {
            event.preventDefault();
            this.#adatGyujt();
            this.#kattintTrigger("ujAdatHozzaAdas");
        });
 
    }
    
    #formKezeles(){
        let txt = "<div class='form-group'>";
        for (const key in this.#adat) {
            txt += `<input type='text' id='${key}' name='datum'>`;
            txt += ` <label for="html">${key}</label>`;
            txt += ` <br>`;
        }
        
        txt += "<button id=submit type='button'>Kész</button>";
        txt += "</div>";
        this.formElem.append(txt);
    }

    #adatGyujt(){
        const DATUM = $("#dátum");
        const TIPUS = $("#tipus");
        const INFORMACIO = $("#információ");
        const EMLEKEZTETO = $("#emlékeztető");
        this.#adat.dátum = DATUM.val();
        this.#adat.tipus = TIPUS.val();
        this.#adat.információ = INFORMACIO.val();
        this.#adat.emlékeztető = EMLEKEZTETO.val();

    }

    #kattintTrigger(esemenyNev){
        const E = new CustomEvent(esemenyNev, { detail: { ...this.#adat } });
        window.dispatchEvent(E);
    }

}

export default FormView;