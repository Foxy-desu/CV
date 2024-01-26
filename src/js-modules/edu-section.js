function renderEduSection(data) {
    const education = data.asideBlock.education;
    const elems = education.map((edu) => {
        const {university: place, degrees} = edu;
        const degreesElems = degrees.map((deg)=> {
            return (
                `<li className="entity__degree">
                    <p className="entity__degree-name">
                        ${deg.name}
                    </p>
                    <p className="entity__degree-years">
                        ${deg.years}
                    </p>
                </li>`
            )
        })
        return (
            `<li className="education__entity">
                <h3 className="entity__place">${place}</h3>
                <ul className="entity__degrees">
                    ${degreesElems.join('\n')}
                </ul>
            </li>`
        )

    })

    return (
        `<section className="education">
            <h2 className="education__heading">Education</h2>
            <ul className="education__list">
                ${elems.join('\n')}
            </ul>
        </section>`
    )
};

export {renderEduSection};