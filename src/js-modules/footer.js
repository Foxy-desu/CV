import git from '../assets/icons/github.svg'

function renderFooter(data) {
    return (
        `<footer class="footer">
            <a class="git-card" href="${data.gitHub}">
                <img class="git-card__img" width="25" height="25" src="${git}" alt="GitHub"/>
                <p class="git-card__text">Visit my GitHub</p>
            </a>
            <p class="footer__year">2024</p>
        </footer>`
    )
}

export {renderFooter};