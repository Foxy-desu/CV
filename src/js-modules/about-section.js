function renderAboutSection(data) {
    const about = data.mainBlock.aboutMe;
    const descElems = about.map((paragraph)=> {
        return `<p className="about__desc">${paragraph}</p>`
    })
    return (
        `<section className="about">
            <h2 className="about__heading content-heading">About me</h2>
            <div className="about__desc-block">
                ${descElems.join('\n')}
            </div>
        </section>`
    )
}

export {renderAboutSection};