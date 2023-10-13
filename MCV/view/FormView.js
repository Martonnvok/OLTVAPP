class FormView {
  #adat = [];
  #oltasok = [];
  #mentettOlt;

  constructor(adat, oltasok, szuloElem) {
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
    let txt = "<div class='form'>";
    txt += `<label for="vakcina">Válassz vakcinát:</label>`;
    txt += `<select name="vakcina" id="vakcina">`;
    for (let i = 0; i < this.#oltasok.length; i++) {
      txt += `<option id=valaszt${i} value="${this.#oltasok[i]}">${this.#oltasok[i]}</option>`;
    }
    txt += `</select>`;
    txt += "<br>"
    txt += `<label for="datum">Dátum:</label>`
    txt += `<input type="date" id="datum" name="datum">`
    txt += "<br>"
    txt += `<label for="datum">Tipus:</label>`
    txt += `<input type='text' class = "form-control" id='form_tipus'>`;
    txt += "<br>"
    txt += `<label for="datum">Információ:</label>`
    txt += `<input type='text' class = "form-control" id='form_információ'>`;
    txt += "<br>"
    txt += `<label for="datum">Emlékeztető:</label>`
    txt += `<input type='text' class = "form-control" id='form_emlékeztető'>`;
    txt += `<br>`;
    txt += "<button type='submit' id=submit>Küldés</button>";
    txt += "</div>";
    this.formElem.append(txt);
  }

  #adatGyujt() {
    Object.keys(this.#adat).forEach((key) => {
      this.#adat[key] = $(`#form_${key}`).val();
    });
    this.#adat.dátum = $("#datum").val();
    this.#mentettOlt = $("#vakcina").val();
  }

  getMentettOlt() {
    return this.#mentettOlt;
  }

  #kattintTrigger(esemenyNev) {
    const E = new CustomEvent(esemenyNev, { detail: { ...this.#adat } });
    window.dispatchEvent(E);
  }
}

export default FormView;
