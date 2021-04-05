import {Popup} from "./Popup";
import {Adapter} from "./Adapter";
import {IVendorList, VendorList} from "./VendorList";
import {createCookieEvent} from "./createCookieEvent";

export function initCookiePopup(popupId: string, listId: string, acceptBtnId: string, rejectBtnId: string, apiPath: string) {
    const vendorListEl = document.getElementById(listId)
    const popupAcceptBtn = document.getElementById(acceptBtnId)
    const popupRejectBtn = document.getElementById(rejectBtnId)

    const arr = new Set<number>()

    const popUp1 = new Popup(popupId)
    popUp1.open()

    const adapter = new Adapter(apiPath)
    const vendorList: IVendorList = new VendorList(null)


    function fillList() {
        adapter.getRequest().then(res => {
            const items = []
            for (let item in res.vendors) {
                items.push({
                    id: res.vendors[item].id,
                    name: res.vendors[item].name,
                    policyUrl: res.vendors[item].policyUrl
                })
            }
            vendorList.list = items
            vendorList.render(listId)
        })
    }

    function attachEvent() {
        vendorListEl.addEventListener('click', (e) => {
            const elem = e.target as HTMLButtonElement
            if (elem.nodeName === "BUTTON" && elem.dataset.id) {
                arr.add(parseInt(elem.dataset.id))
                elem.disabled = true
            } else {
                e.stopPropagation()
            }
        })

        createCookieEvent(popupAcceptBtn, 'click', 'Accept', arr, popUp1)
        createCookieEvent(popupRejectBtn, 'click', 'Reject', arr, popUp1)
    }

    fillList()
    attachEvent()
}