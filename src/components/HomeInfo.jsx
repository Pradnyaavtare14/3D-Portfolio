import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assests/icons/arrow.svg'; // Ensure the path is correct

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p>{text}</p> 
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain'/>
        </Link>
    </div>
);

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Pradnya Avtare</span> 👋
            <br/>
            A Full Stack Web Developer!
        </h1>
    ),
    2: (
        <InfoBox 
            text='The skills I have learned in my engineering'
            link='/about'
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
            text='Created multiple projects successfully. Curious about the impact ?'
            link='/projects'
            btnText="Visit my projects"
        />
    ),
    4: (
        <InfoBox 
            text='Need a project done or looking for a developer? I am just a few keystrokes away'
            link='/contact'
            btnText="Let's talk"
        />
    ),
};

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
};

export default HomeInfo;
