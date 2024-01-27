function renderAboutSection(data) {
    const about = data.mainBlock.aboutMe;
    const descElems = about.map((paragraph)=> {
        return `<p class="about__desc">&emsp;${paragraph}</p>`
    })
    return (
        `<section class="about section">
            <h2 class="about__heading">About me</h2>
            <div class="about__desc-block">
                ${descElems.join('\n')}
            </div>
        </section>`
    )
}

export {renderAboutSection};