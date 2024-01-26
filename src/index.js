import { cvData } from "./js-modules/data";
import { renderPage } from "./js-modules/page";
import { renderHeader } from "./js-modules/header";
import { renderWrap } from "./js-modules/main-container";
import { renderAside } from "./js-modules/aside";
import { renderMain } from "./js-modules/main";
import { renderAsideBlocks } from "./js-modules/aside-blocks";
import { renderContacts } from "./js-modules/contacts-section";
import { renderEduSection } from "./js-modules/edu-section";
import { renderSkillsSection } from "./js-modules/skills-section";
import { renderLangSection } from "./js-modules/lang-section";
import { renderAboutSection } from "./js-modules/about-section";
import { renderExp } from "./js-modules/exp-section";
import { renderFooter } from "./js-modules/footer";

const experience = renderExp(cvData);
const about = renderAboutSection(cvData);
const langusges = renderLangSection(cvData);
const skills = renderSkillsSection(cvData);
const education = renderEduSection(cvData);
const contacts = renderContacts(cvData);
const asideBlocks = renderAsideBlocks(contacts, education, skills, langusges);
const main = renderMain(about, experience);
const aside = renderAside(asideBlocks);
const footer = renderFooter(cvData)
const mainWrap =  renderWrap(aside, main);
const header = renderHeader(cvData);
const page = renderPage(header, mainWrap, footer);
document.body.insertAdjacentHTML("afterbegin", page);