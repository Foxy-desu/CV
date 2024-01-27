function renderPage(...elems) {
    return `<div class="page">${elems.join('\n')}</div>`
};

export {renderPage}