import photo from '../assets/img/photo.jpeg';
import cofee from '../assets/icons/cofee-house.svg';
import hangman from '../assets/icons/hangman.png';
import japan from '../assets/icons/japan.png';
import library from '../assets/icons/lib.png';
import plndsg from '../assets/icons/PLNDSG.png';

const cvData = {
    name: 'Alexandra',
    surname: 'Orliuk',
    position: 'Frontend developer',
    photo: photo,
    asideBlock: {
        contacts: {
            phone: '+79893544196',
            mail: 'iammeduza@gmail.com',
            telegram: 'Pincalsthedeer'
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
            'JS (ES6)',
            'React',
            'Git',
            'GitLab CI/CD',
            'NPM',
            'Webpack',
            'Docker',
            'Figma',
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
          "I've been passionate about frontend development for a while, and have already obtained some skills in it. If you kindly check my GitHub, you may find pet-projects I've made using different technologies. Each time I start a project, I aim not only at consolidation of my knowledge, but also at broadening my professional outlook.",
          "I have some landing pages, multi-page sites, SPA created. The tasks I generally encounter are: layout analysis; blocks, elements and modifiers implementation; DOM and events manipulation, working with objects, arrays and primitive data types using Java Script; adding adaptive and responsive styling. I attempt to use module approach for easy maintenance, opt for code linting and formatting using ESLint, prettier, style lint.",
          "I'm currently learning React, so my latest project is based on it. It also includes libraries for routing, DOM elements manipulation, parsing and purifying HTML code injected in components; it is the first project I start using a UI library 'Swiper' and local storage in"
        ],
        experience: [
            {name: 'Coffee House', desc: '', thumb: cofee, src: 'https://foxy-desu.github.io/CoffeeHouse/coffee-house/'},
            {name: 'Hangman', desc: '', thumb: hangman, src: 'https://foxy-desu.github.io/HangMan/hangman/src/'},
            {name: 'Library landing', desc: '', thumb: library, src: 'https://foxy-desu.github.io/Library-landing-project/'},
            {name: 'Japan landing', desc: '', thumb: japan, src: 'https://foxy-desu.github.io/Japan_travel_landing/'},
            {name: 'Polina Design', desc: '', thumb: plndsg, src: 'https://foxy-desu.github.io/polina-design/'},

        ]
    },
    gitHub: 'https://github.com/Foxy-desu'
}

export {cvData};
