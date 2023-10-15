export default class Elem {
    #szuloElem
    #divElem
    #pElem
    #esemenyem

    constructor(szuloElem) {
        this.#szuloElem = szuloElem;
        this.#esemenyem = new CustomEvent("elemKivalaszt", { detail: this });

        this.#htmlOsszeallit();

        this.#divElem.on("click", (sender) => {
            this.#esemenytrigger();
        })
    }

    getErtek() {
        return this.#pElem.text();
    }

    setErtek(ertek) {
        ertek = ertek.toUpperCase();
        switch(ertek) {
            case "O": {
                this.#pElem.addClass("figura-zold");
                this.#pElem.removeClass("figura-piros");
                this.#pElem.html(ertek);
                break;
            }
            case "X": {
                this.#pElem.removeClass("figura-zold");
                this.#pElem.addClass("figura-piros");
                this.#pElem.html(ertek);
                break;
            }
        }
    }

    #htmlOsszeallit() {
        let txt = '<div class="elem"><p></p></div>';
        this.#szuloElem.append(txt);
        this.#divElem = this.#szuloElem.children("div:last-child");
        this.#pElem = this.#divElem.children("p");
    }

    #esemenytrigger() {
        window.dispatchEvent(this.#esemenyem);
    }

}