function renderLangSection(data) {
    const langs = data.asideBlock.languages;
    const langElems = Object.entries(langs).map(([key, value])=> {
        return (
            `<li class="languages__language">
                <span class="languages__language-name">${key}</span> -
                <span class="languages__language-lvl">${value}</span>
            </li>`
        )
    });

    return (
        `<section class="languages section">
            <h2 class="languages__heading content-heading">languages</h2>
            <ul class="languages__list">
                ${langElems.join('\n')}
            </ul>
        </section>`
    )
};

export {renderLangSection};