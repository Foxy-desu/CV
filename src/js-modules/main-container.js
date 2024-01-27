function renderWrap(...content) {
    return (
        `<div class="wrap info-wrap">${content.join('\n')}</div>`
    )
}

export {renderWrap};