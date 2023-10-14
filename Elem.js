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
            console.log("click")
            this.#esemenytrigger();
        })
    }

    setErtek(ertek) {
        this.#pElem.html(ertek);
    }

    #htmlOsszeallit() {
        let txt = '<div class="elem"><p></p></div>';
        this.#szuloElem.append(txt);
        this.#divElem = this.#szuloElem.children("div:last");
        this.#pElem = this.#divElem.children("p");
        console.log(this.#divElem, this.#pElem);
    }

    #esemenytrigger() {
        // const esemenyem = new CustomEvent("elemKivalaszt", { detail: this });
        window.dispatchEvent(this.#esemenyem);
    }

}