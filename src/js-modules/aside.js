function renderAside(...content) {
    return (
        `<aside className="aside">${content.join('\n')}</aside>`
    )
}

export {renderAside};