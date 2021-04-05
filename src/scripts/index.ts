import '../style.css'
import {initCookiePopup} from "./initCookiePopup";
import {getCookie} from "./Cookie";

const path = "https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json"

function init() {
    const cookieValue = getCookie("GDPR").split(';')[0]
    if (!cookieValue || cookieValue === "Reject") {
        initCookiePopup("popup1", "vendors__list", "popup1-accept", "popup1-reject", path)
    }
}

init()

