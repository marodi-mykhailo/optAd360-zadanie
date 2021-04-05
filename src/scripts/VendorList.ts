import {IList, List, ListItemsType} from "./List";

export interface IVendorListItem {
    id: number,
    name: string,
    policyUrl: string
}

export interface IVendorList extends IList {
    render: (elemId: string) => void
}


const template = (item: IVendorListItem) => {

    return (
        `<li data-id="${item.id}" class="vendors__list-item">
                <div class="vendors__list-item-content">
                    <a href="${item.policyUrl}">${item.name}</a>
                    <button data-id="${item.id}" class="vendors__list-item-bnt" type="button">Accept</button>
                </div>
        </li>`
    )
}

export class VendorList extends List {
    constructor(items: ListItemsType) {
        super(items);
    }

    render(elemId: string) {
        let elem = document.getElementById(elemId)
        this.items.forEach((item: IVendorListItem, idx) =>
            elem.insertAdjacentHTML('beforeend', template(item)))
    }
}