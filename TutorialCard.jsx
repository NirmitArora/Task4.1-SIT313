import React from 'react';

export const TutorialCard = ({ tutorial }) => {
    return (
        <div className='article-card'>
            <img src={tutorial.image} alt='Tutorial' className='imagecss' />
            <h2>{tutorial.title}</h2>
            <p>{tutorial.Desc}</p>
            <p>By {tutorial.username}</p>
        </div>
    );
};