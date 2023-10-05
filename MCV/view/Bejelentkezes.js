class Bejelentkezes {
    #szuloElem
    felhasznalok=[]

    constructor(szuloElem, bcontroller) {
        this.#szuloElem = szuloElem;
        this.#szuloElem.html("<form>");
        this.divElem = this.#szuloElem.children(".bejelentkezes");

        this.felhasznalonev = this.#szuloElem.find(".uname");
        this.jelszo = this.#szuloElem.find('.psw');
        this.belepGomb = this.#szuloElem.find(".belep");

        this.bejelentkez()

        this.felhasznalok = bcontroller;
        this.felhasznalok = [];

        this.belepGomb.on('click', () => {
            this.bcontroller.belepesEllenorzes();
        });
        
    }

    bejelentkez() {
        let txt = `<form >`

        txt += `<div >
        <input type="text" placeholder="Felhasználónév" class="uname" >
        <input type="password" placeholder="Jelszó" class="psw" >
        <br>
        <button type="submit" class="belep">Login</button>
      </div>`

        txt += `<div >
      <button type="button" >Cancel</button>
      <span >Forgot <a href="#">password?</a></span>
    </div>
  </form>`

        this.#szuloElem.append(txt);


    }

    belepesEllenorzes() {
        const felhasznalonevInput = this.felhasznalonev.val();
        const jelszoInput = this.jelszo.val();

        const login = this.felhasznalok.some((user) => {
            return user.felhasznalonev === felhasznalonevInput && user.jelszo === jelszoInput;
        });

        if (login) {
            this.divElem.html('<p>Sikeres belépés!</p>');
        } else {
            alert('Hibás felhasználónév vagy jelszó!');
        }

        this.felhasznalonev.val('');
        this.jelszo.val('');
    }

    setFelhasznalok(felhasznalok) {
        this.felhasznalok = felhasznalok;
    }

    esemenyTrigger(esemenyNev) {
        const E = new CustomEvent(esemenyNev);
        window.dispatchEvent(E);
    }

}

export default Bejelentkezes