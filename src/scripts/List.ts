import {IVendorListItem} from "./VendorList";

export interface IList {
    items: ListItemsType
    list: ListItemsType
}

export type ListItemsType = [] | IVendorListItem[]

export class List implements IList {
    items: ListItemsType

    constructor(items: ListItemsType) {
        this.items = items
    }

    get list() {
        return this.items
    }

    set list(items: ListItemsType) {
        this.items = items
    }
}