import { cvData } from "./js-modules/data";
import { renderPage } from "./js-modules/page";
import { renderHeader } from "./js-modules/header";
import { renderWrap } from "./js-modules/main-container";
import { renderAside } from "./js-modules/aside";
import { renderMain } from "./js-modules/main";
import { renderAsideBlocks } from "./js-modules/aside-blocks";
import { renderContacts } from "./js-modules/contacts-section";
import { renderEduSection } from "./js-modules/edu-section";

const education = renderEduSection(cvData)
const contacts = renderContacts(cvData);
const asideBlocks = renderAsideBlocks(contacts, education);
const main = renderMain('content main')
const aside = renderAside(asideBlocks)
const mainWrap =  renderWrap(aside, main);
const header = renderHeader(cvData);
const page = renderPage(header, mainWrap);
document.body.insertAdjacentHTML("afterbegin", page);