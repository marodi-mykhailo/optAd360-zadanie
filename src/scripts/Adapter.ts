interface IAdapter {
    path: string
}

export class Adapter implements IAdapter {
    path: string

    constructor(path: string) {
        this.path = path
    }

    getRequest() {
        return fetch(this.path).then(res => res.json())
    }
}