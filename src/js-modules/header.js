function renderHeader(info) {
    return (
        `<header className="hero">
            <div className="hero__desc-block">
                <h1 className="person-name">
                    <span className="surname">${info.surname}</span>
                    <span className="name">${info.name}</span>
                <h1>
                <p className="person-position">
                    ${info.position}
                </p>
            </div>
            <div className="hero__image-block">
                <div className="person-photo">
                    <img className="person-photo__img" src="${info.photo}">
                </div>
            </div>
        </header>`
    )
}

export {renderHeader};