function renderMain(...content) {
    return (
        `<main class="main">${content.join('\n')}</main>`
    )
}

export {renderMain};