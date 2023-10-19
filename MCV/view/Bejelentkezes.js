class Bejelentkezes {
    #szuloElem
    felhasznalok = []

    constructor(szuloElem) {
        this.#szuloElem = szuloElem;
        this.divElem = this.#szuloElem.children(".bejelentkezes");

        this.felhasznalonev = this.#szuloElem.find(".felhasznalonev");
        this.jelszo = this.#szuloElem.find(".jelszo");
        this.belepGomb = this.#szuloElem.find(".belep");

        this.bejelentkez();

        this.belepGomb.on('click', () => {
            this.#esemenyTrigger('belep');
        });


    }

    bejelentkez() {

        let txt = `<form>
        <input type="text" placeholder="Felhasználónév" class="felhasznalonev autocomplete="current-password"" >
        <input type="password" placeholder="Jelszó" class="jelszo autocomplete="current-password"" >
        <br>
        <button type="submit" class="belep">Login</button>`

        txt += `<button type="button" >Cancel</button>
                <span >Forgot <a href="#">password?</a></span>
                </form>`

        this.#szuloElem.append(txt);


    }

    belepesEllenorzes(felhasznalok) {
        this.felhasznalok = felhasznalok;

        let txt = '';
        const felhasznalonevInput = this.felhasznalonev.val();
        const jelszoInput = this.jelszo.val();

        if (felhasznalonevInput !== '' && jelszoInput !== '') {
            const login = felhasznalok.some((user) => {
                return user.felhasznalonev === felhasznalonevInput && user.jelszo === jelszoInput;
            });

            if (login) {
                this.#szuloElem.find('form').next('p').remove();
                txt += '<p>Sikeres belépés!</p>';
            } else {
                this.#szuloElem.find('form').next('p').remove();
                txt += '<p>Hibás felhasználónév vagy jelszó!</p>';       
            }
        }
        this.#szuloElem.find('form').after(txt);
    }


    #esemenyTrigger(esemenyNev) {
        const E = new CustomEvent(esemenyNev);
        window.dispatchEvent(E);
    }


}

export default Bejelentkezes