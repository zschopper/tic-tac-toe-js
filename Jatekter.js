export default class Jatekter {
    #szuloElem

    constructor(szuloElem) {
        this.#szuloElem = szuloElem;
        let elemek = [];
        for (let i = 0; i < 9; i++) {
            elemek.push(new Elem(this.#szuloElem));
            let lepes = 0;
            let ertek = "";
            $(window).on("elemKivalaszt", (event) => {
                console.log("kivalaszt")
                lepes++;
                event.detail.setErtek(lepes % 2? "O": "X");
            })
        }

    }
}