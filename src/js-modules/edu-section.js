function renderEduSection(data) {
    const education = data.asideBlock.education;
    const elems = education.map((edu) => {
        const {university: place, degrees} = edu;
        const degreesElems = degrees.map((deg)=> {
            return (
                `<li class="entity__degree">
                    <p class="entity__degree-name">
                        ${deg.name}
                    </p>
                    <p class="entity__degree-years">
                        ${deg.years}
                    </p>
                </li>`
            )
        })
        return (
            `<li class="education__entity">
                <h3 class="entity__place">${place}</h3>
                <ul class="entity__degrees">
                    ${degreesElems.join('\n')}
                </ul>
            </li>`
        )

    })

    return (
        `<section class="education section">
            <h2 class="education__heading content-heading">education</h2>
            <ul class="education__list">
                ${elems.join('\n')}
            </ul>
        </section>`
    )
};

export {renderEduSection};