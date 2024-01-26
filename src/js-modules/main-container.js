function renderWrap(...content) {
    return (
        `<div className="wrap">${content.join('\n')}</div>`
    )
}

export {renderWrap};