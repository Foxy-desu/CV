function renderAside(...content) {
    return (
        `<aside class="aside">${content.join('\n')}</aside>`
    )
}

export {renderAside};