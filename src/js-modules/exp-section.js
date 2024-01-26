function renderExp(data) {
    const exp = data.mainBlock.experience;
    const expElems = exp.map((entry)=> {
        return (
            `<li className="experience__exp-entry">
                <div className="exp-entry__img-wrap"><img className="exp-entry__img" src="${entry.thumb}" alt="${entry.name}"/></div>
                <p className="exp-entry__name">${entry.name}</p>
                <a className="exp-entry__link">${entry.src}</a>
            </li>`
        )
    })
    return (
        `<section className="experience">
            <h2 className="experience__heading content-heading">Experience</h2>
            <ul className="experience__list">
                ${expElems.join('\n')}
            </ul>
        </section>`
    )
}

export {renderExp};