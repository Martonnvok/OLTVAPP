class AdatView {
  #elem = [];
  #oltas;
  #szuloElem;
  #gyerekElem;
  #index;

  constructor(index, oltas, elem, szuloElem) {
    this.#index = index;
    this.#elem = elem;
    this.#oltas = oltas;
    this.#szuloElem = szuloElem;
    console.log(this.#oltas);
    this.oltasok();
    this.kiir();
    this.click();
  }

  oltasok() {
    let txt = "";
    txt += "<br>";
    txt +=
      "<span id='oltas" +
      this.#index +
      "' class='border border-1'>" +
      this.#oltas +
      "</span>";
    this.#szuloElem.append(txt);
  }

  kiir() {
    let txt = "";

    for (const key in this.#elem) {
      txt += "<div class='adat"+ this.#index + "'style='display: none';>"
      txt +=
        "<span id='" +
        key +
        "'class='border border-1'>" +
        key +
        ": " +
        this.#elem[key] +
        "</span>";
      txt += "</div>"
    }
    this.#szuloElem.append(txt);
  }

  click(){
    $("#oltas" + this.#index + "").on("click", () => {
      if ($(".adat" + this.#index + "").is(":visible")) {
        $(".adat" + this.#index + "").slideUp();
        setTimeout(() => {
          $("#oltas" + this.#index + "").css("border-bottom-left-radius", "30px");
          $("#oltas" + this.#index + "").css("border-bottom-right-radius", "30px");
        },400);
      } else {
        $(".adat" + this.#index + "").slideDown();
        $("#oltas" + this.#index + "").css("border-bottom-left-radius", "0px");
        $("#oltas" + this.#index + "").css("border-bottom-right-radius", "0px");
      }
    });
  }
}

export default AdatView;
