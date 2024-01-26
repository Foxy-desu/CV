import phone from '../assets/icons/phone.svg';
import mail from '../assets/icons/mail.svg';
import telegram from '../assets/icons/telegram.svg';

function renderContacts(data) {
    const contacts = data.asideBlock.contacts;
    const elements = Object.entries(contacts).map(([key, value], index)=> {
        const images = [phone, mail,telegram];
        const hrefs = ['tel:', 'mailto:', 'https://t.me/'];
        const currentImg = images[index];
        const currHref = hrefs[index];

        return (
           `<li className="contacts__${key}">
                <image
                    className="contacts__ico"
                    src="${currentImg}"
                    alt="${key} contact"/>
                <a
                    className="contacts__link"
                    href="${currHref}${value}">
                    ${key.toString() === 'telegram'? '@':''}${value}
                </a>
            </li>`
        )
    })
    return (
        `<section>
            <h2 className="contacts__heading content-heading">Contacts</h2>
            <ul className="contacts__list content-list">
                ${elements.join('\n')}
            </ul>
        </section>`
    )
};
export {renderContacts};