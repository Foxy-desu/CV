function renderExp(data) {
    const exp = data.mainBlock.experience;
    const expElems = exp.map((entry)=> {
        return (
            `<li class="experience__exp-entry">
                <div class="exp-entry__img-wrap"><img class="exp-entry__img" src="${entry.thumb}" alt="${entry.name}"/></div>
                <p class="exp-entry__name">${entry.name}</p>
                <a class="exp-entry__link">${entry.src}</a>
            </li>`
        )
    })
    return (
        `<section class="experience section">
            <h2 class="experience__heading content-heading">experience</h2>
            <ul class="experience__list">
                ${expElems.join('\n')}
            </ul>
        </section>`
    )
}

export {renderExp};