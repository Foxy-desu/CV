function renderSkillsSection(data) {
    const skills = data.asideBlock.skills;
    const skillsElems = skills.map((skill)=> {
        return (
            `<li className="skills__skill">
                ${skill}
            </li>`
        )
    });

    return (
        `<section className="skills">
            <h2 className="skills__heading content-heading">Skills</h2>
            <ul className="skills__list">
                ${skillsElems.join('\n')}
            </ul>
        </section>`
    )
};

export {renderSkillsSection};