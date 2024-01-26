function renderPage(...elems) {
    return `<div className="page">${elems.join('\n')}</div>`
};

export {renderPage}