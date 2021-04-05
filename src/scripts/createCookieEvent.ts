import {setCookie} from "./Cookie";

export const createCookieEvent = (target: HTMLElement, event: string, status: string, array: Set<number>, popup?: any) => {
    target.addEventListener(event, () => {
        let value = `${status}; Vendors:`
        array.forEach((item) => {
            value += `${item} `
        })
        setCookie("GDPR", value, {expires: 3600 * 24})
        popup.close()
    })
}