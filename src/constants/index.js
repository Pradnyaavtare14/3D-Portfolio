// import { meta, shopify, starbucks, tesla } from "../assets/images";
import css from "../assests/icons/css.svg";
import git from "../assests/icons/git.svg";
import github from '../assests/icons/github.svg';
import html from '../assests/icons/html.svg';
import javascript from '../assests/icons/javascript.svg';
import linkedin from '../assests/icons/linkedin.svg';
import mongodb from '../assests/icons/mongodb.svg';
import nodejs from '../assests/icons/nodejs.svg';
import react from '../assests/icons/react.svg';
import redux from '../assests/icons/redux.svg';
import tailwindcss from '../assests/icons/tailwindcss.svg';
import python from '../assests/icons/python.jpeg';
// import Cplusplus from'../assests/icons/Cpluslpus.png;
import AWS from '../assests/icons/AWS.png';
import DOCKER from '../assests/icons/DOCKER.png';
import Cplusplus from '../assests/icons/Cpluslpus.png';
import AndroidStudio from '../assests/icons/AndroidStudio.png';
import Django from '../assests/icons/Django.png';
import Book from '../assests/icons/Book.png';
import netflix from '../assests/icons/netflix.png';
import Amazon from '../assests/icons/Amazon.png';
import recipe from '../assests/icons/recipe.png';
import contact from '../assests/icons/contact.png'




// import {
    
//     contact,
//     css,
//     // estate,
//     // express,
//     git,
//     github,
//     html,
//     javascript,
//     linkedin,
//     mongodb,
//     // motion,
//     // mui,
//     // nextjs,
//     nodejs,
//     // pricewise,
//     react,
//     redux,
//     // sass,
//     // snapgram,
//     // summiz,
//     tailwindcss,
//     // threads,
//     // typescript
//     python,
//     Cplusplus,
//     AWS,
//     DOCKER,AndroidStudio,
//     Django,
   
//     Book,
//     netflix,
//     Amazon,
//     recipe


// } from "../assests/icons"

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl:python,
        name: "python",
        type: "Programming language",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl:Cplusplus,
        name: "Cplusplus",
        type: "Programming Language",
    },
    {
        imageUrl: AWS,
        name: "AWS",
        type: "Frontend",
    },
    {
        imageUrl: DOCKER,
        name: "Docker",
        type: "Tools",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: AndroidStudio,
        name: "AndroidStudio",
        type: "Tool",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: Django,
        name: "Django",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer",
        company_name: "Pradhan Mantri Kaushal Vikas Yojana",
        // icon: starbucks,
        // iconBg: "#accbe1",
        date: "April 2023 - June 2023",
        points: [
            "Developing and maintaining web applications using React.js , Javascrpit , HTML , CSS , Bootstrap  and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer (React and Node js development)",
        company_name: "Digital Ipsum",
        // icon: tesla,
        // iconBg: "#fbc3bc",
        date: " June 2024 - August 2024",
        points: [
            "Developing and maintaining web applications using React.js , Talwind Css , Nodejs and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/8698083599',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Pradnyaavtare14',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/pradnya-avtare-351186219/',
    }
];

export const projects = [
    {
        iconUrl: Book,
        theme: 'btn-back-red',
        name: ' LIBRARY MANAGEMENT SYSTEM',
        description: ' Creating a e-library where user can access various book with the description of the book developed using react and dataset for the books.',
        link: 'https://library-management-system-roan.vercel.app/',
    },
    {
        iconUrl: netflix,
        theme: 'btn-back-green',
        name: ' NETFLIX-CLONE',
        description: ' MERN Stack project—Firebase setup — Authentication — Redux Toolkit, Creating a Netflix Clone using React, The user-friendly UI with different movies,their genre and their trailer',
        link: 'https://drive.google.com/file/d/1mamDdW1F2lS0hNpOvewZ0VcR3eKW2D_N/view',
    },
    {
        iconUrl: recipe,
        theme: 'btn-back-blue',
        name: ' GOOD-FOOD-RECIPE WEBSITE',
        description: 'Creating a recipe website to share amazing new recipe and how to make that recipe with description.',
        link: 'https://drive.google.com/file/d/1RNY1vNRyeAy5srznoMTXi_HA6uHtjGXv/view',
    },
    {
        iconUrl: Amazon,
        // theme: 'btn-back-pink',
        name: 'AMAZONCLONE WEBSITE',
        description: 'Amazon Clone to try new features in it, The user-friendly UI to practice html basics and css with bootstramp',
        link: 'https://drive.google.com/file/d/17vHz3PPeIxPAADHK4Vj4pon3LTLFlk3i/view',
    }
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // }
];