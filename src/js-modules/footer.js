import git from '../assets/icons/github.svg'

function renderFooter(data) {
    return (
        `<footer className="footer">
            <a className="git-card" href="${data.gitHub}">
                <img className="git-card__img" width="25" height="25" src="${git}" alt="GitHub"/>
                <p className="git-card__text">Visit my GitHub</p>
            </a>
            <p className="footer__year">2024</p>
        </footer>`
    )
}

export {renderFooter};