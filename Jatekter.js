import Elem from "./Elem.js";

export default class Jatekter {
    #szuloElem
    #meret
    #lepes

    constructor(szuloElem, meret) {
        this.#szuloElem = szuloElem;
        this.#meret = meret;
        let elemek = [];

        $(":root").css("--meret", meret);

        for (let i = 0; i < this.#meret; i++) {
            elemek.push([]);
            for (let j = 0; j < this.#meret; j++) {
                let elem = new Elem(this.#szuloElem);
                elem.poz = { x: j, y: i }
                elemek[i].push(elem);
            }
        }

        this.#lepes = 0;
        $(window).on("elemKivalaszt", (event) => {
            if (!event.detail.getErtek()) {
                this.#lepes++;
                console.log(`kivalaszt: ${this.#lepes}`); // , event.detail

                event.detail.setErtek(this.#lepes % 2 ? "O" : "X");
            } else {
                console.log("kivalaszt: " + event.detail.getErtek());
            }
        })
    }
}