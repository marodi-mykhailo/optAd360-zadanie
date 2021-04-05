import '../style.css'
import {initCookiePopup} from "./initCookiePopup";

const path = "https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json"

initCookiePopup("popup1", "vendors__list", "popup1-accept", "popup1-reject", path)