function renderExp(data) {
    const exp = data.mainBlock.experience;
    const expElems = exp.map((entry)=> {
        const name = entry.name.split(' ').map((word)=>{
            return `<span>${word}<br></span>`
        }).join('\n')
        return (
            `<li class="experience__exp-entry">
                <a class="exp-entry__link" href="${entry.src}">
                <div class="exp-entry__img-wrap">
                    <img class="exp-entry__img" width="70" height="70" src="${entry.thumb}" alt="${entry.name}"/>
                </div>
                <p class="exp-entry__text">${name}</p></a>
            </li>`
        )
    })
    return (
        `<section class="experience section">
            <h2 class="experience__heading content-heading">projects</h2>
            <ul class="experience__list">
                ${expElems.join('\n')}
            </ul>
        </section>`
    )
}

export {renderExp};