class FormView {
  #adat = [];
  #oltasok = [];
  #mentettOlt;

  constructor(adat, oltasok, szuloElem) {
    //Formhoz szükséges kódok
    this.#oltasok = oltasok;
    this.#adat = adat;
    this.szuloElem = szuloElem;
    this.szuloElem.html("<form>");
    this.formElem = this.szuloElem.children("form");
    this.#formKezeles();
    this.submitElem = $("#submit");
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#adatGyujt();
      this.#kattintTrigger("ujAdatHozzaAdas");
    });
  }

  #formKezeles() {
    let txt = "<div class='form-group'>";
    txt += "<div class='combo box'>";
    txt += `<label for="vakcina">Válassz vakcinát:</label>`;
    txt += `<select name="vakcina" id="vakcina">`;
    for (let i = 0; i < this.#oltasok.length; i++) {
      txt += `<option id=valaszt${i} value="${this.#oltasok[i]}">${this.#oltasok[i]}</option>`;
    }
    txt += `</select>`;
    txt += "</div>";
    txt += `<div class="mb-3 mt-3">`;
    for (const key in this.#adat) {
      txt += `<input type='text' class = "form-control" id='form_${key}' name='datum' placeholder="${key}">`;
      txt += ` <br>`;
    }
    txt += `</div>`;
    txt += "<button type='submit' id=submit>Küldés</button>";
    txt += "</div>";
    this.formElem.append(txt);
  }

  #adatGyujt() {
    Object.keys(this.#adat).forEach((key) => {
        this.#adat[key] = $(`#form_${key}`).val();
    });
    this.#mentettOlt = $("#vakcina").val();
  }

  getMentettOlt(){
    return this.#mentettOlt;
  }

  #kattintTrigger(esemenyNev) {
    const E = new CustomEvent(esemenyNev, { detail: { ...this.#adat } });
    window.dispatchEvent(E);
  }
}

export default FormView;
