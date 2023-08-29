import React from 'react'
import { Button } from 'semantic-ui-react';
import { TutorialCard } from './TutorialCard';




export const FeaturedTutorial = ({ tut }) => {
    return (
        <div>
            <div className='article-list'>
                {tut.map((tutorial, index) => (
                    <TutorialCard key={index} tutorial={tutorial} />
                ))}
            </div>
            <br />
            <br />
            <Button className='btn' primary>
                See all tutorials
            </Button>
        </div>
    );
};
