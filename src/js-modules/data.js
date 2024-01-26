import photo from '../assets/img/photo.jpeg';

const cvData = {
    name: 'Alexandra',
    surname: 'Orliuk',
    position: 'Frontend developer',
    photo: photo,
    asideBlock: {
        contacts: {
            phone: '+79893544196',
            mail: 'iammeduza@gmail.com',
            telegram: 'pincalsthedeer'
        },
        education: [
            {
                university: 'Amur State University',
                degrees: [
                    {name:'Bachelor of Linguistics', years: '2014-2018'},
                    {name:'Master of Linguistics', years: '2018-2020'}
                ]
            },
        ],
        skills: [
            'HTML5',
            'CSS3',
            'SASS (SCSS)',
            'JS',
            'NPM',
            'Webpack',
            'Figma',
            'Git',
            'Bash'
        ],
        languages: {
            russian: 'native',
            english: 'advanced',
            chinese: 'elementary'
        }
    },
    mainBlock: {
        aboutMe: [
            "Having graduated the university I started my carreer as a teacher of foreign languages at a local foreign language school in Blagoveshchensk. Being a teacher was fun, it also helped a lot in ganing different skills. After 4 years of teaching I found out that this was not my kind of thing.",
            "Some circumstances made me leave my hometown for another city where I started working as a client support agent for an IT company. This position gave me much experience in communication, problem solving; let me take a closer look at technical side of our service, and business processes in our company. Working with high skilled developers I realized that frontend developing is an interesting IT field. I've started learning and have already obtaines some hard skills.",
            "I believe my strong will, background and passion for frontend will surely lead me to this brand-new profession."
        ],
        experience: [
            {name: 'Coffee House', desc: '', thumb: '', src: 'https://foxy-desu.github.io/CoffeeHouse/coffee-house/'},
            {name: 'Hangman', desc: '', thumb: '', src: 'https://foxy-desu.github.io/HangMan/hangman/src/'},
            {name: 'Library landing', desc: '', thumb: '', src: 'https://foxy-desu.github.io/Library-landing-project/'},
            {name: 'Japan landing', desc: '', thumb: '', src: 'https://foxy-desu.github.io/Japan_travel_landing/'}
        ]
    },
    gitHub: 'https://github.com/Foxy-desu'
}

export {cvData};