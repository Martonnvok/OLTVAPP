class Bejelentkezes {
    #szuloElem
    #adatok=[]

    constructor(szuloElem, adatok) {
        this.#adatok = adatok
        this.#szuloElem = szuloElem;
        this.divElem = this.#szuloElem.children(".bejelentkezes");

        this.felhasznalonev = this.#szuloElem.children(".felhasznalonev");
        this.jelszo = this.#szuloElem.children(".jelszo");
        this.belepGomb = this.#szuloElem.children("#belep");
        console.log(this.belepGomb)

        this.bejelentkez();

        this.belepGomb.on('click', (event) => {
            console.log("hsgfjhgsd")
            event.preventDefault();
            this.esemenyTrigger('belep');
            this.#belepesEllenorzes();
        });

        


    }

    bejelentkez() {

        let txt = `<form>
        <input type="text" placeholder="Felhasználónév" class="felhasznalonev">
        <input type="password" placeholder="Jelszó" class="jelszo">
        <br>
        <button type="button" id="belep">Belepes</button>
        <span >Forgot <a href="#">password?</a></span>
        </form>`

        this.#szuloElem.append(txt);


    }

    #belepesEllenorzes() {

        let txt = '';
        const felhasznalonevInput = this.felhasznalonev.val();
        const jelszoInput = this.jelszo.val();

        if (felhasznalonevInput !== '' && jelszoInput !== '') {
            for (let i = 0; i < this.#adatok.length; i++) {
                console.log(this.#adatok)
                
            }

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


    esemenyTrigger(esemenyNev) {
        const E = new CustomEvent(esemenyNev);
        window.dispatchEvent(E);
    }


}

export default Bejelentkezes