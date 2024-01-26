function renderMain(...content) {
    return (
        `<main className="main">${content.join('\n')}</main>`
    )
}

export {renderMain};