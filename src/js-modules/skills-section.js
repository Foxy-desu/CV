function renderSkillsSection(data) {
    const skills = data.asideBlock.skills;
    const skillsElems = skills.map((skill)=> {
        return (
            `<li class="skills__skill">
                ${skill}
            </li>`
        )
    });

    return (
        `<section class="skills section">
            <h2 class="skills__heading content-heading">skills</h2>
            <ul class="skills__list">
                ${skillsElems.join('\n')}
            </ul>
        </section>`
    )
};

export {renderSkillsSection};