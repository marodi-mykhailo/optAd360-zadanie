interface IPopup {
    target: HTMLElement
    openBtn?: HTMLElement
    closeBtn?: HTMLElement
    open: () => void
    close: () => void
}

export class Popup implements IPopup {
    target: HTMLElement
    openBtn?: HTMLElement
    closeBtn?: HTMLElement


    constructor(target: string, openBtn?: string, closeBtn?: string) {
        this.target = document.getElementById(target)
        this.openBtn = openBtn && (document.getElementById(openBtn).onclick = this.open.bind(this))
        this.closeBtn = closeBtn && (document.getElementById(closeBtn).onclick = this.close.bind(this))
    }

    open() {
        this.target.style.display = "block"
        document.documentElement.classList.add("no-scroll")
    }

    close() {
        this.target.style.display = "none"
        document.documentElement.classList.remove("no-scroll")
    }
}