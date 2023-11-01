class TextUrlapElem {
    #key = "";
    #leiro = {};
    #value = "";
    #valid = true;
    constructor(key, leiro, formElem) {
      this.#key = key;
      this.#leiro = leiro;
      this.formElem = formElem;
      this.#textElem();
  
      this.inputElem = $(`#${this.#key}`);
      this.validElem = this.formElem
        .children("div:last-child")
        .children(".valid");
      this.invalidElem = this.formElem
        .children("div:last-child")
        .children(".invalid"); 
      this.inputElem.on("keyup", () => {
        this.#value = this.inputElem.val();
        let regex = this.#leiro.regex;
        let reg = new RegExp(regex);
  
        if (reg.test(this.#value)) {
          this.#valid = true;
          this.validElem.removeClass("elrejt");
          this.invalidElem.addClass("elrejt");
        } else {
          this.#valid = false;
          this.invalidElem.removeClass("elrejt");
          this.validElem.addClass("elrejt");
        }
      });
    }
  
    get value() {
      return this.#value;
    }
  
    get valid() {
      return this.#valid;
    }
  
    get key() {
      return this.#key;
    }
  
    #textElem() {
      let txt = `
          <div class="mb-3 mt-3">
              <label for="${this.#key}" 
              class="form-label">
              ${this.#leiro.megjelenes}
              </label>
              
              <input type="${this.#leiro.tipus}" class="form-control" 
              id="${this.#key}" 
              name="${this.#key}"
              placeholder="${this.#leiro.placeholder}"  
              pattern="${this.#leiro.regex}"
              value="${this.#leiro.value}">
              
              <div class="valid elrejt">Rendben</div>
              <div class="invalid elrejt">${this.#leiro.validalas}</div>
          </div>
          `;
  
      this.formElem.append(txt);
    }
  }
  
  export default TextUrlapElem;