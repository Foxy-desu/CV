function renderHeader(info) {
    return (
        `<div class="wrap">
            <header class="hero">
                <div class="hero__desc-block">
                    <h1 class="person-name">
                        <p class="person-name__surname">${info.surname}</p>
                        <p class="person-name__name">${info.name}</p>
                    </h1>
                    <p class="person-position">
                        ${info.position}
                    </p>
                </div>
            </header>
        </div>`
    )
}

export {renderHeader};