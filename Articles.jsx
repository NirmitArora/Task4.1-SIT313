import React from 'react'
import { MyItem } from './MyItem'
import { Button } from 'semantic-ui-react';

export const FeaturedArticles = (props) => {
  return (
    <div>
      <div className='article-list'>
        {props.item.map((art, index) => {
          return <MyItem art={art} key={index} />
        })}
      </div>
      <br />
      <br />
      <Button className='btn' primary>See all articles</Button>
    </div>
  );
}
