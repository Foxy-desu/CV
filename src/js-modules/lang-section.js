function renderLangSection(data) {
    const langs = data.asideBlock.languages;
    const langElems = Object.entries(langs).map(([key, value])=> {
        return (
            `<li className="languages__language">
                <span className="languages__language-name">${key}</span> -
                <span className="languages__language-lvl">${value}</span>
            </li>`
        )
    });

    return (
        `<section className="languages">
            <h2 className="languages__heading content-heading">Languages</h2>
            <ul className="languages__list">
                ${langElems.join('\n')}
            </ul>
        </section>`
    )
};

export {renderLangSection};